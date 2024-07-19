const mongoose = require('mongoose');
const mongouri = 'mongodb+srv://Harshith05:Hello1234@harshith05.8bslefx.mongodb.net/Tnp';

const connectToMongodb=async()=>{
    try{
        await mongoose.connect(mongouri);
        console.log("Connected to MongoDB");

    }
    catch(err){
            console.log(err);
    }

}

module.exports=connectToMongodb;