//express framework
const express = require("express");
//express app
const app = express();

//referencing connectDB
const DB = require("./database").connectDB;


//Routes

const urlRoutes = require("./routes/urlRoutes");
//connect to our DB
DB();

//informing an api that we're using json format only
app.use(express.json());




app.use("/api/url", urlRoutes);//we name them manually



//listening to a port to check request and give responses
app.listen(process.env.PORT, () => {
    console.log('Listening on port:', +process.env.PORT);
});