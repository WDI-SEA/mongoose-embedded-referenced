let router = require('express').Router()
let db = require('../models')

router.get('/', (req, res) => {
  db.Author.find()
  .then(authors => {
    res.send(authors)
  })
  .catch(err => {
    console.log('Error', err)
    res.send('Error in GET /authors')
  })
})

module.exports = router
