//to connect to db
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//to config dot =env

dotenv.config();

//creating a DB function [async] returns a promise

exports.connectDB = async () => {
    //handling errors
    try {

        await mongoose.connect(process.env.DB_URL);
        console.log("Connected to the database");

    } catch (err) {

        console.log(err);
        process.exit(1);
    }


}

//to export it
//module.exports=conncectDB;//connected globally

//or directly in the func ecports.connectDB= async()