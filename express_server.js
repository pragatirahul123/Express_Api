const express = require('express')
const app = express()
const bodyParser = require('body-parser')


app.get('/',(req, res) =>{
    res.send('Hello World')
    console.log("HIII working get")
  })


  app.post('/quotes', (req, res) => {
    app.use(bodyParser.urlencoded({extended:true}))
    console.log(req.body)
  })


  app.put('/quotes', (req, res) => {
    console.log(req.body)
  })

  app.delete('/quotes', (req, res) => {
    quotesCollection.deleteOne(
      { name: req.body.name }
    )
  })









app.listen(3100, function() {
    console.log('listening on 3000')
  })
  
 