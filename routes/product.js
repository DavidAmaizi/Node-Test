const express  = require('express');
const router = express.Router()
const Controller = require('../controllers/product');


router.post('/',Controller.create);
router.get('/:id',Controller.findOne);
router.get('/',Controller.findAll);
router.patch('/',Controller.update);
router.delete('/',Controller.delete);




module.exports = router;