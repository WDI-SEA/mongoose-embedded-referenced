// Require any modules we need
let mongoose = require('mongoose')

// Connect to mongodb
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/library', { useNewUrlParser: true })

// Export all models in this folder
// NOTE: Include as many as needed in the same format
module.exports.Author = require('./Author')
module.exports.Book = require('./Book')
