const jwt = require('jsonwebtoken');
require('dotenv').config();

// Retrieve JWT Secrets from ENV
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;

// Retrieve JWT Properties from ENV
const ACCESS_TOKEN_EXPIRY = process.env.ACCESS_TOKEN_EXPIRY || "15m";
const REFRESH_TOKEN_EXPIRY = process.env.REFRESH_TOKEN_EXPIRY || "30d";

// Access Tokens
const generateAccessToken = (data) => {
  return jwt.sign(data, ACCESS_TOKEN_SECRET, { expiresIn: ACCESS_TOKEN_EXPIRY });
};

// Verify Access Token with error handling
const verifyAccessToken = (token) => {
  try {
    return jwt.verify(token, ACCESS_TOKEN_SECRET, { ignoreExpiration: true });
  } catch (error) {
    // Handle different JWT errors specifically
    if (error instanceof jwt.TokenExpiredError) {
      throw new Error('Access token has expired');
    } else if (error instanceof jwt.JsonWebTokenError) {
      throw new Error('Invalid access token signature');
    } else {
      throw new Error('Error verifying access token');
    }
  }
};

// Refresh Tokens
const generateRefreshToken = (data) => {
  return jwt.sign(data, REFRESH_TOKEN_SECRET, { expiresIn: REFRESH_TOKEN_EXPIRY });
};

// Verify Refresh Token with error handling
const verifyRefreshToken = (token) => {
  try {
    return jwt.verify(token, REFRESH_TOKEN_SECRET, { ignoreExpiration: true });
  } catch (error) {
    // Handle different JWT errors specifically
    if (error instanceof jwt.TokenExpiredError) {
      throw new Error('Refresh token has expired');
    } else if (error instanceof jwt.JsonWebTokenError) {
      throw new Error('Invalid refresh token signature');
    } else {
      throw new Error('Error verifying refresh token');
    }
  }
};

module.exports = { 
  generateAccessToken, 
  generateRefreshToken, 
  verifyAccessToken, 
  verifyRefreshToken, 
  ACCESS_TOKEN_SECRET, 
  ACCESS_TOKEN_EXPIRY, 
  REFRESH_TOKEN_SECRET, 
  REFRESH_TOKEN_EXPIRY 
};