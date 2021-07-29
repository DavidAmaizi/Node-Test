
const express = require('express')();

express.get('/',(req,res)=>{
    res.send('It works!')

});


module.exports = express;