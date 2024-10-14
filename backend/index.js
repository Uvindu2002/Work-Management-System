const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const healthroute = require('./routes/reminderRoutes');
const healthDataRoute = require('./routes/HealthDataRoutes');
const config = require('./config/config');

const app = express();

// Use CORS middleware
app.use(cors());

app.use(express.json());

app.use('/health', healthroute);
app.use('/healthdata', healthDataRoute);

app.use("/", (req, res, next) => {
    res.send("It is working");
});

// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(config.mongoURI, {
           
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

connectDB().then(() => {
    app.listen(config.port, () => {
        console.log(`Server running on port ${config.port}`);
    });
}).catch((err) => console.log(err));