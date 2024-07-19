const { Router } = require('express');
const mongoose= require('mongoose');
const {Schema} = mongoose;

const Studentschema = new Schema({
    StudentName:{
        type:String,
        required:'true'
    },
    Branch:{
        type:String,
        required:'true'
    },
    Batch:{
        type:String,
        required:'true'
    },
    ScholarId:{
        type:String,
        required:'true'
    },
    CGPA:{
        type:String,
        required:'true'
    },
    ActiveBacklogs:{
        type:Number,
        required:'true'
    },
    PastBacklogs:{
        type:Number
        
    },
    Class10percentage:{
        type:String
    },
    Class12percentage:{
        type:String
    },
    Address:{
        type:String
    }

})


const StudentModel=mongoose.model("Student",Studentschema);
module.exports=StudentModel;