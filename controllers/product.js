
const Product  = require('../models/product');


//create product 
module.exports.create = (req,res,next)=>{

    const newProduct =  new Product();
    
    newProduct.name= req.body.name;
    newProduct.price = req.body.price

    newProduct.save()
 .then((response)=>{
     res.status(200).send({
         message:'Product created successfuly',
         data:response,
     })
 })
 .catch((err)=>{
     res.status(400).send({error:err})
 })

}



//find all
module.exports.findAll = (req,res,next)=>{

}


//find one by Id
module.exports.findOne = (req,res,next)=>{


    

}


//update order
module.exports.update = (req,res,next)=>{

}



//delete order
module.exports.delete = (req,res,next)=>{

}

