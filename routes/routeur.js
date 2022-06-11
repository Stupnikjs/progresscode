const express = require('express'); 
const routeur = express.Router(); 
const {auth, acceuil, authenticateToken} = require('../controllers/authController')
const dotenv = require('dotenv'); 
dotenv.config(); 






routeur.get('/', acceuil)

routeur.post('/', auth)


module.exports = routeur