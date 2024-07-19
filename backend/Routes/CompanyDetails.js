const express =require('express');
const router = express.Router();
const mongoose =require('mongoose');
const CompanyModel = require('../Models/Company');


router.post('/insertcompanydetails',async(req,res)=>{
    data = req.body;

    try{

        const newcompany = new CompanyModel(data);
        await newcompany.save()
        return res.status(200).json({
            message:"Data insertion succesful",
            success:true
        })

    }
    catch(error){
        
        return res.status(500).json({
            message:error.message || error,
            error:true
        })
    }
})

router.get("/gettingcompanydetails",async(req,res)=>{
    try{
        const companydetails=await CompanyModel.find({});
        return res.status(200).json({
            message:"Fetched the details succesfully",
            success:true,
            data:companydetails
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

router.post("/updatecompanydetails", async (req, res) => {
    const { _id, Status } = req.body;
   
    try {
        if (!_id || !Status) {
            return res.status(400).json({
                message: "ID and Status are required",
                error: true
            });
        }
        

      
        const updatedCompany = await CompanyModel.findByIdAndUpdate(
            _id,
            { Status },
            { new: true }
        );

        if (!updatedCompany) {
            return res.status(404).json({
                message: "Company not found",
                error: true
            });
        }

        return res.status(200).json({
            message: "Company details updated successfully",
            data: updatedCompany,
            error: false
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true
        });
    }
});


module.exports=router;