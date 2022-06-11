const express = require('express'); 
const app = express(); 
const mongoose = require('mongoose'); 
const dotenv = require('dotenv'); 
const routeur = require('./routes/routeur'); 

const profileRouteur = require('./routes/profileRouteur'); 

const cookieParser = require('cookie-parser')

dotenv.config(); 

const bodyParser = require('body-parser'); 


mongoose.connect(process.env.DATABASE_URL, () => 
console.log('mongoDB connected')
)

app.use(cookieParser()); 

app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  )

app.use(express.static('public'))

app.set('view engine', 'ejs'); 

app.use('/profile', profileRouteur)
app.use('/', routeur)


app.listen( process.env.PORT || 3333 , () => {
console.log('serveur connecté')

})