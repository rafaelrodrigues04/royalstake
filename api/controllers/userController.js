const argon2 = require('argon2')
const ms = require('ms')
const { generateAccessToken, generateRefreshToken, verifyAccessToken, verifyRefreshToken, ACCESS_TOKEN_SECRET, ACCESS_TOKEN_EXPIRY, REFRESH_TOKEN_SECRET, REFRESH_TOKEN_EXPIRY } = require('../utils/jwt')
const User = require('../models/userModel')
const RefreshTokens = require('../models/refreshTokensModel');

const argonHashOptions = {
    type: argon2.argon2id, // Use Argon2id for better security
    memory: 65536, // 64 MB
    time: 3, // 3 Iterations
    parallelism: 1, // Single-threaded
};

// Create New User Function
exports.createUser = async (req, res) => {
    try {
        // Get Payload Fields
        const { name, email, password, passwordConfirm } = req.body
        
        // Check if required fields are not empty
        if (!name || !email || !password || !passwordConfirm) {
            return res.status(400).json({ error: 'Missing required fields' })
        }

        // Check if password and passwordConfirm match
        if (password != passwordConfirm) {
            return res.status(400).json({ error: 'Passwords do not match' })
        }

        // Password requirements validation rules
        const passwordValidationRules = [
            { test: !password, message: "Password is required." },
            { test: password.length < 8, message: "Password must be at least 8 characters long." },
            { test: !/[A-Z]/.test(password), message: "Password must contain at least one uppercase letter." },
            { test: !/[a-z]/.test(password), message: "Password must contain at least one lowercase letter." },
            { test: !/[0-9]/.test(password), message: "Password must contain at least one number." },
            { test: !/[\W_]/.test(password), message: "Password must contain at least one special character." }
        ];
        
        for (const rule of passwordValidationRules) {
            if (rule.test) {
                return res.status(400).json({
                    success: false,
                    message: rule.message
                });
            }
        }

        // Hash password with argon2
        const hashedPassword = await argon2.hash(password, argonHashOptions);

        // Create New User
        const newUser = await User.create({ name, email, password: hashedPassword })

        // Generate Access and Refresh token
        const accessToken = generateAccessToken({ userId: newUser.id });
        const refreshToken = generateRefreshToken({ userId: newUser.id });

        // Store refreshToken in Database
        await RefreshTokens.create({
            userId: newUser.id,
            refreshToken: refreshToken,
            expiresAt: Date.now() + ms(REFRESH_TOKEN_EXPIRY)
        });

        // Generate accessToken HTTP-Only cookie
        res.cookie("accessToken", accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "Strict",
            path: "/",
        });

        // Generate refreshToken HTTP-Only cookie
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV == "production",
            sameSite: "Strict",
            path: "/session/refresh",
        });

        // Return 201 HTTP Status and New User Details
        res.status(201).json({
            success: true,
            data: { newUser },
            accessToken: accessToken,
        })
    } catch (error) {
        console.error(error); // Log the full error for debugging
        res.status(500).json({ error: error.message || 'An unexpected error occurred' })
    }
}

// Authenticate User Function
exports.authenticateUser = async (req, res) => {
    try {
        // Get Payload Fields
        const { email, password } = req.body;
        
        // Check if required fields are not empty
        if (!email || !password) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Check if user exists in database
        const user = await User.findOne({ 
            where: { email } 
        });

        // Verify the provided password against the stored hashed password
        const isPasswordValid = await argon2.verify(user.password, password);

        // Return invalid credentials error if user does not exist or passwords dont match
        if (!user || !isPasswordValid) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Generate Access and Refresh tokens
        const accessToken = generateAccessToken({ userId: user.id });
        const refreshToken = generateRefreshToken({ userId: user.id });

        // Store refreshToken in Database
        await RefreshTokens.create({
            userId: user.id,
            refreshToken: refreshToken,
            expiresAt: Date.now() + ms(REFRESH_TOKEN_EXPIRY)
        });

        // Generate accessToken HTTP-Only cookie
        res.cookie("accessToken", accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "Strict",
            path: "/",
        });

        // Generate refreshToken HTTP-Only cookie
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "Strict",
            path: "/",
        });

        // Return 201 HTTP Status and New User Details
        res.status(201).json({
            success: true,
            data: { user },
            accessToken: accessToken,
        });
    } catch (error) {
        console.error(error); // Log the full error for debugging
        res.status(500).json({ error: error.message || 'An unexpected error occurred' });
    }
}

exports.logoutUser = async (req, res) => {
    try {
        // Get refreshToken from cookies
        const refreshToken = req.cookies.refreshToken;

        // If no refreshToken is found, return an error
        if (!refreshToken) {
            console.log(req.cookies)
            return res.status(400).json({ error: 'No refresh token provided' });
        }

        // Delete refreshToken from database
        await RefreshTokens.destroy({
            where: { refreshToken }
        });

        // Clear cookies
        res.clearCookie("accessToken", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "Strict",
            path: "/",
        });
        res.clearCookie("refreshToken", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "Strict",
            path: "/",
        });

        // Return success response
        res.status(200).json({ success: true, message: 'Logged out successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message || 'An unexpected error occurred' });
    }
};

// Get User Data Function
exports.getUserData = async (req, res) => {
    try {
        // Get user id from url params
        const { id } = req.params;
        
        // Check if required fields are not empty
        if (!id) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Check if user exists in database
        const user = await User.findOne({ 
            where: { id } 
        });

        // Check if user exists in database
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Return 200 HTTP Status and User Details
        res.status(200).json({
            data: { userId: user.id, name: user.name, email: user.email },
        });
    } catch (error) {
        console.error(error); // Log the full error for debugging
        res.status(500).json({ error: error.message || 'An unexpected error occurred' });
    }
}