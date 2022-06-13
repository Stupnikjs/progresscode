const express = require('express'); 
const profileRouteur = express.Router(); 
const {getprofile, deleteObjectif} = require('../controllers/profileController'); 
const {getform, postObjectif, postReport, postInfo} = require('../controllers/formController'); 
const {authenticateToken} = require('../controllers/authController'); 
const {getStuckReport} = require(('../controllers/reportController')); 
const {getInfo} = require('../controllers/infoController')
const dotenv = require('dotenv'); 

dotenv.config(); 




profileRouteur.get('/report',authenticateToken, getStuckReport)
profileRouteur.get('/info',authenticateToken, getInfo)
profileRouteur.get('/form', authenticateToken, getform)
profileRouteur.get('/', authenticateToken, getprofile)

profileRouteur.post('/:id', deleteObjectif)
profileRouteur.post('/form/objectif', postObjectif)
profileRouteur.post('/form/report', postReport )
profileRouteur.post('/form/info', postInfo )

module.exports = profileRouteur