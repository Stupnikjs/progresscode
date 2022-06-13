const mongoose = require('mongoose')


const getform  = (req, res) =>{
    res.render('page/formulaire')

}
const objectifSchema = require('../models/objectif.modele');
const reportSchema = require('../models/report.modele');
const infoSchema = require('../models/info.modele');


const postObjectif = async(req, res) => {
    const {objectifText} = req.body; 
    const objectif = new objectifSchema({
        _id : new mongoose.Types.ObjectId(),
        date : new Date(), 
        nom : objectifText, 
        success: false, 

    })
    try{
        await objectif.save()
        res.redirect('/profile')

    }catch(err){
        console.log(err)
    }
    
}


const postReport = async(req, res) => {
    const {titleReport, report, success} = req.body;
    if (success === "on") var resolue = true; 
 const reportToSave = new reportSchema({
     _id : new mongoose.Types.ObjectId(),
     date : new Date(), 
     titleReport : titleReport, 
     details : report, 
     success: resolue 
 }); 
 try{
     await reportToSave.save()
     res.redirect('/profile')

 }catch(err){
     console.log(err)
 }
}
const postInfo = async(req, res) => {
    const {titleInfo, info, categorie} = req.body;
    console.log(req.body)
 const infoToSave = new infoSchema({
     _id : new mongoose.Types.ObjectId(),
     date : new Date(), 
     titleInfo : titleInfo, 
     details : info, 
     categorie: categorie 
 }); 
 try{
     console.log(infoToSave)
     await infoToSave.save()
     res.redirect('/profile')

 }catch(err){
     console.log(err)
 }
}




module.exports = {getform, postObjectif, postReport, postInfo}