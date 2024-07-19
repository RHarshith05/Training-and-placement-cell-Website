const express=require('express');
const router =express.Router();
const mongoose =require('mongoose');
const Cord=require("../Models/Cord");//schema
const CordModel = mongoose.model("CoordinatorDetails",Cord.schema);

router.post("/coordinatorsinsert",async(req,res)=>{
   
   
    data=req.body;
    if(!data)
        {
            return res.status(400).send('Data is required');
        }
    try{
        const newdata = new CordModel(data);
        await newdata.save();
        return res.status(200).json({
            message:"Data insertion succesful",
            success:true
        })
    }
    catch(err){
        console.err("error inserting data",err.message);
        return res.status(500).json({
            message:err.message || err,
            err:true
        })
    }


})

module.exports = router;