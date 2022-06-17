const mongoose  = require("mongoose")


const connectDB =  () =>{
    const uri = process.env.MONGODB_URL ||  "mongodb://localhost/SubscriptionsDB" // like URL but not Only for browesrs
    ///option for mongoose
    const options ={
        useNewUrlParser:true,
        useUnifiedTopology:true,
    
    };
    mongoose.connect(uri,options)
    
};

module.exports = connectDB;
