const express = require('express');
const router = express.Router();

// Add route
router.get('/', (req, res) => {
    res.sendFile('/Users/Gai/Documents/IOD_EXERCISES/IOD-SOFTWARE/Module5/public/calculator.html');
    
});

module.exports = router;