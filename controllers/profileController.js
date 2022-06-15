const mongoose = require('mongoose'); 
const objectifSchema = require('../models/objectif.modele')
const jwt = require('jsonwebtoken')



const getprofile = async(req, res) =>{

    const objectif = await objectifSchema.find({success: false});
    var dateObjectif = objectif.map( element => element['date']) 
    const aujourdhui = new Date(); 
    dateObjectif = dateObjectif.map( element => Math.round((Number(aujourdhui) - Number(element)) / (864*100000))) ; 
     
    res.render('page/profile', {objectif:objectif, dateObjectif: dateObjectif })


}



const deleteObjectif = async(req,res) => {
    const objectifID = req.params.id;

try{
   await objectifSchema.deleteOne({ _id : objectifID}); 
    res.redirect('/profile')
} catch(err){
    console.log(err)

}

}



module.exports = {getprofile, deleteObjectif}