const dotenv = require('dotenv');
const express = require('express');
const app = express();
const connectDB = require('./config/db');
const path = require('path');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

dotenv.config();
connectDB();

const port = process.env.PORT || 3000;

// Path to the frontend's built files
const buildpath = path.join(__dirname, "../frontend/dist");
app.use(express.static(buildpath));

// CORS Configuration
const corsOptions = {
    origin: '*', // Replace '*' with specific origin (e.g., 'http://localhost:5173') if using credentials
    credentials: true,
};
app.use(cors(corsOptions));

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', require('./routes/indexRoute'));

// Catch-all route to serve the frontend
app.get('*', (req, res) => {
    res.sendFile(path.join(buildpath, "index.html"));
});

// Start the server
app.listen(port, (err) => {
    if (err) {
        console.error(err);
        return false;
    }
    console.log(`Server is running on port ${port}`);
});
