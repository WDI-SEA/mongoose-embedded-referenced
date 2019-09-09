let mongoose = require('mongoose')

let bookSchema = new mongoose.Schema({
  title: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author'
  }
})

module.exports = mongoose.model('Book', bookSchema)
