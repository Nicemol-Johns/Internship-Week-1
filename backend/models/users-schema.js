const mongoose = require('mongoose');

const UsersSchema = mongoose.Schema({                                              
    name:{
        type:String,                                                         
        required:true
    },
    email:{
        type:String,                                                         
        required:true
    },
    ph:{
        type:String,                                                         
        required:true
    },
    password:{
        type:String,                                                          
        required:true
    }
})

const users = mongoose.connection.useDb('Users');


const usersModel = users.model('users',UsersSchema);

module.exports = usersModel;