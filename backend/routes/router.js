const express = require('express');
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({extended:true}));

const usersModel = require("../models/users-schema");

router.post("/user-signup",async (req,res)=>{                              
    try{
        //console.log(req.headers.authorization)
        console.log(req.body);
        const user = req.body;                                               
        const newdata = await usersModel(user);                               
        newdata.save();                                
        res.json({message:"POST Successful",api:'/login',status:200});                                                                             
    }catch(error){
        res.json({message:"POST Unuccessful",api:'/',status:400});                            
        console.log(`Cannot POST data`);                                      
    }
})

router.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log(email,password)
    if(email==="admin@org.in"){
        if(password==="admin123"){
            res.json({  role:'admin', message: 'Admin Login successful',status:200,api:'/admin'});
        }else{
            res.json({status:401,error: 'Invalid username or password'});
        }
    }else{
      usersModel.findOne({ email, password })
      .then(user => {
        if (user) {
          const name = user.name;
          res.json({status:200, role:'user', message: 'Login successful',api:'/user',user:name});
        } else {
          res.json({status:401, error: 'Invalid username or password' });
        }
      })
      .catch(error => {
        res.status(500).json({ error: error.message });
      });

    }
  

  });

module.exports = router;
