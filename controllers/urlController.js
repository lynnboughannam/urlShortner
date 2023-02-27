const Url = require("../models/urlModel");

const crypto = require('crypto');//to generate random id


//has 2 main parameters
exports.urlShortner = async (req, res) => {
    const longUrl = req.body.longUrl;
    try {
        const URLCode = crypto.randomBytes(8).toString('hex');
        let url = await Url.findOne({ originalUrl });
        if (!url) {
            return res.status(409).json({ message: "url is already in use." });

        }

        url = await Url.create({
            urlCode: URLCode,
            shortUrl: req.body.shortUrl,
            longUrl: req.body.longUrl,

        });

        return res.json({ id: URLCode })
    } catch (err) {
        res.status(400).json({ message: err.message });//404:not found 400:bad request
    }

};