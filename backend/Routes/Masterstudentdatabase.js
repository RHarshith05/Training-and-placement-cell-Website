const express=require('express');
const MasterstdentModel = require('../Models/Masterstudent');
const router=express.Router();



router.post('/insertingmasterstudentdetails',async(req,res)=>{
    const data=req.body;
    try{
       
        await MasterstdentModel.insertMany(data);
        res.status(200).json({
            message:"Successfully inserted",
            success:true
        })
    }
    catch(error)
    {
        res.status(500).json({
            message:error.message|| error,
            error:true
        
        })
    }
})


app.post('/api/updatingmasterstudentdetails',async(req, res) => {
    try {
      const updatedMasterData = req.body;
      // Assuming you have a function to update the database
      await updateMasterStudentDetails(updatedMasterData);
      res.json({ success: true });
    } catch (error) {
      console.error('Error updating master student details:', error);
      res.status(500).json({ success: false, message: error.message });
    }
  });

router.get('/getmasterstudentdetails',async(req,res)=>{
    try{
        const masterstudentdeets=await MasterstdentModel.find({});
        return res.status(200).json({
            message:"Fetched the details succesfully",
            success:true,
            data:masterstudentdeets
        })
    }
    catch(error)
    {
        return res.status(500).json({
            message:error.message||error,
            error:false
        })
    }
})



module.exports=router;