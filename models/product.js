const  mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProductSchema = new Schema({

    name:{
        type:String,
        required:true,
        unique:true
    },

    price:{
        type:Number,
        unique:true,
        required:true
    },


});



module.exports = mongoose.model('Product',ProductSchema);


