const express = require('express');
const helmet = require('helmet'); // Import helmet
const app = express();
const port = 3000;

// Use helmet to secure the app and configure Content Security Policy
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            styleSrc: ["'self'", 'https://fonts.googleapis.com', "'unsafe-inline'"], // Allow Google Fonts and inline styles
            fontSrc: ["'self'", 'https://fonts.gstatic.com'],  // Allow Google Fonts to load fonts
        }
    }
}));

// Serve static files from the 'public' folder
app.use(express.static('public'));


// Import calculator routes
const calculatorRoutes = require('./routes/calculatorRoutes');
const homeRouter = require('./routes/homeRouter');

// Use calculator routes
app.use('/calculator', calculatorRoutes);
app.use('/', homeRouter);

app.listen(port, () => {
    console.log(`Calculator app running at http://localhost:${port}`);
});
