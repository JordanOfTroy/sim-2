require('dotenv').config()
const express = require('express'),
      bodyParser = require('body-parser'),
      massive = require('massive')
      ctrl = require('./controller')
      

const app = express()
const PORT = 5555

app.use(bodyParser.json())
/************************************************************ */

app.get('/api/houses', ctrl.getAllHouses)
app.post('/api/houses', ctrl.addNewHouse)
app.delete('/api/houses/:id', ctrl.deleteAHouse)

/************************************************************ */
massive(process.env.CONNECTION_STRING)
.then(db => {
  app.set('db', db)
  app.listen(PORT, ()=> console.log(`Live on ${PORT}`))
})
