const mongoose = require("mongoose");
const connectDatabase = () =>{
    mongoose.connect(process.env.DB_URL, {family: 4})
    .then((data) => {
        console.log(`MongoDB connected with server: ${data.connection.host}`);
    }).catch((err)=>{
        console.log("This is mongoDB error"+ err);
    })
};

module.exports = connectDatabase;