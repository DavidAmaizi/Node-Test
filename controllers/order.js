
const Order  = require('../models/order');


//create order
module.exports.create = (req,res,next)=>{
const newOrder =  new Order();

// newOrder.save()
//  .then((response)=>{
//      res.status(200).send({
//          message:'Order created successfuly',
//          data:response,
//      })
//  })
//  .catch((err)=>{
//      res.status(400).send({error:err})
//  })





}



//find  all
module.exports.findAll = (req,res,next)=>{

}


//find one
module.exports.findOne = (req,res,next)=>{

}


//update order
module.exports.update = (req,res,next)=>{

}



//delete order
module.exports.delete = (req,res,next)=>{

}

