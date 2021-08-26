
const bcrypt =  require('bcrypt');
const User  = require('../models/user');
const jwt =  require('jsonwebtoken');
const { CheckToken } = require('../middleware/CheckAuth');




//login

module.exports.login = async (req,res,next)=>{
    

const email = req.body.email;
const pass =  req.body.password;
await User.findOne({email:email})
.exec()
.then( async (response)=>{

const user = await response;
const password = await bcrypt.compareSync(pass,user.password);
const payload = {_id:user._id};

if(password ===false){
    res.status(400).send('Wrong email or password');
}

if(!user){

    res.status(400).send('User does not exist');

}

if(user && password){
const token = jwt.sign(
    payload,
    process.env.JWT_SECRET,
    {
    expiresIn:'30d'
 });

res.status(200).send({
    token:token
});

}

}).catch((err)=>{
    res.status(400).send({error:err})
})





}


//create user
module.exports.create = async (req,res,next)=>{
   
const newUser = new User();
newUser.name = req.body.name;
newUser.email = req.body.email;
newUser.password= await bcrypt.hash(req.body.password,10);


newUser.save()
 .then((response)=>{
     res.status(200).send({
         message:'User created successfuly',
         data:response,
     })
 })
 .catch((err)=>{
     res.status(400).send({error:err})
 })


}



//find  all users
module.exports.findAll = (req,res,next)=>{
    const users = User.find({}).exec();
    res.status(200).send(users);

}


//find one ById
module.exports.findOne = async (req,res,next)=>{
 const userId = req.user;  
 await User.findById(userId)
 .exec()
 .then((user)=>{
     res.status(200).send(user);
 })

}


//update user
module.exports.update = (req,res,next)=>{
  

}



//delete user
 module.exports.delete = async (req,res,next)=>{



}

