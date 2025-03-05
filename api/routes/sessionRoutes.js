const express = require('express')
const router = express.Router()
const sessionController = require('../controllers/sessionController')

// Endpoint: /sessions/refresh -> Refresh User Session
router.post('/refresh', sessionController.refreshSession)

module.exports = router;
