const mongoose = require('mongoose');

// require("dotenv").config();                                                   
// const ConnectionString = process.env.CONNECTION_STRING; 


mongoose.connect("mongodb+srv://projectworkassisst:movieBookingApp@cluster0.narxoug.mongodb.net/")
.then(()=>{
    console.log(`Connection to Database established`);
})
.catch((error)=>{
    console.log(`Error in connecting to database ${error.message}`);
})