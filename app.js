require('dotenv').config()
const express  =  require ('express');
const app =  express();
const mongoose =  require('mongoose');
const bodypaser =  require('body-parser');

// routes imports 
const user = require('./routes/user');
const product = require('./routes/product');
const order = require('./routes/order');

mongoose.connect(process.env.MONGODB_URI,(err)=>{
    if(err) throw err;
    console.log('mongodb connected successfuly')

});


app.use(bodypaser.json());
app.use(bodypaser.urlencoded({extended:true}));

// routes

app.use('/user',user);

app.use('/product',product);

app.use('/order',order);






module.exports = app;