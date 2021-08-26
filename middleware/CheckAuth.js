
const jwt = require('jsonwebtoken');

//check auth

module.exports = (req,res,next)=>{
   
    try{
   
    const token =  req.headers.authorization.split(" ")[1];

   const   user=  jwt.verify(token,process.env.JWT_SECRET);
   req.user= user._id;
   next();
}
catch(err){
    res.status(400).send({error:"Auth faild"})

}


}