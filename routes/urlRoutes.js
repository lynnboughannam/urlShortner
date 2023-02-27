const express = require('express');
const router = express.Router();//based on express
//this router helps create paths/end points

const userController = require("../controllers/urlController");

//define the path of the operation

//sign up
//posting new document into the db

router.post("/url", urlController.urlShortner);
//post(endpoint,function from controller)

//to export the entire model
module.exports = router;