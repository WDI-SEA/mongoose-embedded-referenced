// Require mongoose package
let mongoose = require('mongoose')

// Define an address schema
let addressSchema = new mongoose.Schema({
  city: String,
  state: String,
  zip: Number
})

// Define our Author schema
let authorSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  age: Number,
  address: addressSchema
})

// Create the Author model. Export the author model
module.exports = mongoose.model('Author', authorSchema)
