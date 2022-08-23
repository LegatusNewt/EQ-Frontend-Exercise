const express = require('express')
const path = require('path')
const staticPath = __dirname + "/views";

router = express.Router()


router.get('/', (req, res) => {
    res.sendFile(staticPath + "/index.html")
});

module.exports = router