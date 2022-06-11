const mongoose = require('mongoose'); 

const infoSchema = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId, 
    date : Date,
    titre: String, 
    details: String,
    categorie : String,     
})

module.exports = mongoose.model('infoModel', infoSchema )