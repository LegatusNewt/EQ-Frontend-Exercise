const express = require('express')
const path = require('path')
const staticPath = __dirname + "/views";

router = express.Router()


router.get('/', (req, res) => {
    res.sendFile(staticPath + "/index.html")
});

router.get('/connect', (req, res) => {
    // Attach to WSL and display messages for debugging purposes
    res.sendFile(path.join(__dirname, 'test_client.html'));
});

module.exports = router