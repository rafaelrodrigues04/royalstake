const { 
    generateAccessToken, 
    generateRefreshToken, 
    verifyAccessToken, 
    verifyRefreshToken, 
    ACCESS_TOKEN_SECRET, 
    ACCESS_TOKEN_EXPIRY, 
    REFRESH_TOKEN_SECRET, 
    REFRESH_TOKEN_EXPIRY 
  } = require('../utils/jwt');
  const RefreshTokens = require('../models/refreshTokensModel');
  
  // Refresh User Session
  exports.refreshSession = async (req, res) => {
    try {
      // Get accessToken and refreshToken from Cookies
      const accessToken = req.cookies.accessToken;
      const refreshToken = req.cookies.refreshToken;
  
      if (!accessToken || !refreshToken) {
        return res.status(400).json({ error: 'Tokens are missing', action: 'next' });
      }
  
      // Get current timestamp in seconds
      const currentTimestamp = Math.floor(Date.now() / 1000);
  
      // Verify the accessToken
      let decodedAccessToken;
      try {
        decodedAccessToken = verifyAccessToken(accessToken);
      } catch (error) {
        if (error.message == 'Invalid access token signature') {
          res.cookie('accessToken', '', {
            httpOnly: true,
            expires: new Date(0),
            secure: process.env.NODE_ENV === "production",
            sameSite: "Strict",
            path: '/'
          });
        }
        return res.status(401).json({ error: error.message, action: 'redirect' });
      }
  
      // If accessToken is expired
      if (decodedAccessToken.exp < currentTimestamp) {
        const refreshTokenFromDatabase = await RefreshTokens.findOne({ 
          where: { refreshToken } 
        });
  
        if (!refreshTokenFromDatabase) {
          return res.status(400).json({ error: 'Invalid refresh token', action: 'redirect' });
        }
  
        // Verify refreshToken
        let decodedRefreshToken;
        try {
          decodedRefreshToken = verifyRefreshToken(refreshToken);
        } catch (error) {
          return res.status(401).json({ error: error.message, action: 'redirect' });
        }
  
        if (decodedRefreshToken.exp < currentTimestamp) {
          return res.status(400).json({ error: 'Refresh token expired', action: 'redirect' });
        }
  
        // Generate new accessToken
        const newAccessToken = generateAccessToken({ userId: refreshTokenFromDatabase.userId });
  
        // Send new accessToken as HTTP-only cookie
        res.cookie("accessToken", newAccessToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "Strict",
          path: "/",
        });
  
        return res.status(201).json({ data: { userId: decodedAccessToken.userId }, action: 'redirect' });
      }
  
      // If accessToken is still valid
      return res.status(201).json({ data: { userId: decodedAccessToken.userId }, action: 'next' });
      
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message || 'An unexpected error occurred', action: 'redirect' });
    }
  };  