const express =require('express');
const StudentModel = require('../Models/Student');
const router = express.Router();

router.post('/insertstudentdetails',async(req,res)=>{
    data =req.body;
    try{
        const newstudent = new StudentModel(data);
        await newstudent.save();
        return res.status(200).json({
            message:"Data insertion Succesful",
            success:true
        })
    }
    catch(err)
    {
        console.err("error inserting data",err.message);
        return res.status(500).json({
            message:err.message || err,
            err:true
        })
    }
})



module.exports=router;