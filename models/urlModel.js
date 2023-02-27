const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({

    longUrl: {
        type: String,
        required: [true, "Please enter your url"],
        unique: true,

    },
    urlCode: {// random code
        type: String,
        trim: true,

    },
    shortUrl: {
        type: String,
        required: true,
        unique: true,
    },

},
    { timestamps: true }//to save when it was created to track it

);


module.exports = mongoose.model("User", urlSchema);
//User->users 