const express = require('express');
const router = express.Router();

// Add route
router.get('/add', (req, res) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    res.json({ result: num1 + num2 });
});

// Subtract route
router.get('/subtract', (req, res) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    res.json({ result: num1 - num2 });
});

// Multiply route
router.get('/multiply', (req, res) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    res.json({ result: num1 * num2 });
});

// Divide route
router.get('/divide', (req, res) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    if (num2 === 0) {
        res.status(400).json({ error: "Cannot divide by zero" });
    } else {
        res.json({ result: num1 / num2 });
    }
});

module.exports = router;
