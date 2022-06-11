const mongoose = require('mongoose'); 

const objectifSchema = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId, 
    date : Date, 
    nom : String, 
    success: Boolean, 
 

})

module.exports = mongoose.model('objectifModel', objectifSchema )