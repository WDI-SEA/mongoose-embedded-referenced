let express = require('express')
let app = express()
let db = require('./models')

app.get('/', (req, res) => {
  res.send('Hi')
})

app.get('/testauthor', (req, res) => {
  db.Author.create({
    firstname: 'Brandi',
    lastname: 'Butler',
    age: 999,
    address: {
      city: 'Burien',
      state: 'WA',
      zip: 98146
    }
  })
  .then(result => {
    res.send('success!')
  })
  .catch(err => {
    console.log('Error', err)
    res.send('Oops')
  })
})

app.get('/testbook', (req, res) => {
  db.Book.create({
    title: 'My Book',
    author: '5d76d0b69f64be017076b817'
  })
  .then(result => {
    res.send('Woohoo!')
  })
  .catch(err => {
    console.log('Error', err)
    res.send('Error in GET /testbook')
  })
})

app.use('/authors', require('./controllers/authors'))
app.use('/books', require('./controllers/books'))

app.listen(3000)
