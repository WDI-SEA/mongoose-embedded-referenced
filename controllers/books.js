let router = require('express').Router()
let db = require('../models')

router.get('/', (req, res) => {
  db.Book.find()
  .then(books => {
    res.send(books)
  })
  .catch(err => {
    console.log('Error', err)
    res.send('Error in GET /books')
  })
})

router.get('/withauthor', (req, res) => {
  db.Book.find()
  .populate('author')
  .then(books => {
    res.send(books)
  })
  .catch(err => {
    console.log('Error', err)
    res.send('Error in GET /books')
  })
})

module.exports = router
