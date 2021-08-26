const  mongoose = require('mongoose');
const Schema = mongoose.Schema;


const OrderSchema = new Schema({

    products:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product',
    },
    quantity:{
        type:Number,
        default:1
    }


});



module.exports = mongoose.model('User',OrderSchema);


