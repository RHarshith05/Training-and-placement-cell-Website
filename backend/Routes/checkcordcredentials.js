const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Cord = require("../Models/Cord");//schema
const CordModel = mongoose.model("CoordinatorDetails", Cord.schema);

try {
    router.post("/cordlogincheck", async (req, res) => {
        const email = req.body.email;
        const password = req.body.password;

        var Verified = await CordModel.findOne({email});
        let temp = 0;
        if (Verified.email === email && Verified.password === password) {
            temp = 1;
        }
        if (temp === 1) {
            return res.status(200).json({
                message: "Succesful",
                success: true
            })
        }
        else {
            return res.status(400).json({
                message: "Enter Valid Credentials",
                success: false
            })
        }


    })
}

catch (err) {
    return res.status(500).json({
        message:err.message||err,
        success:false
    })
}


module.exports = router;