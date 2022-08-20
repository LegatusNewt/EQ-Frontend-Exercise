const express = require('express')
const path = require('path')
router = express.Router()

// This route shouldn't exist outside of Dev Mode
router.get('/connect', (req, res) => {
    // Attach to WSL and display messages for debugging purposes
    res.sendFile(path.join(__dirname, 'test_client.html'));
});

module.exports = router