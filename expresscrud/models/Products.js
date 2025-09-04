const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    pname:String,
    pprice:Number,
    pdetails:String
})


//convert schema to model
const ProductModel = mongoose.model('Product',ProductSchema);


module.exports = ProductModel