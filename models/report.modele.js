const mongoose = require('mongoose'); 

const reportSchema = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId, 
    date : Date,
    titre: String, 
    details: String,    
    success: Boolean, 
 

})

module.exports = mongoose.model('reportModel', reportSchema )