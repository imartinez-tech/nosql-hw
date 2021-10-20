const express = require('express');
const morgan = require("morgan");
const mongoose = require('mongoose'); 
const connectDB = require('./config/connection')


const PORT = process.env.PORT || 3001; 

const app = express(); 
app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

app.use(express.static("public"));

// mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/workout", { useNewUrlParser: true, useUnifiedTopology: true});
connectDB();

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});

