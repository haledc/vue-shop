const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
  productId: String,
  productName: String,
  salePrice: Number,
  productImage: String,
  productUrl: String,
  productNum: String,
  checked: Boolean
})

module.exports = mongoose.model('Goods', productSchema)
