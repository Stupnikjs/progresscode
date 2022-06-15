const mongoose = require('mongoose'); 
const objectifSchema = require('../models/objectif.modele'); 
const infoSchema = require('../models/info.modele')

const getFiche = async(req, res) => {
    const {fiche} = req.params
    const objectifFiche = await objectifSchema.findOne({nom:fiche}); 
    const infoList = await infoSchema.find({categorie:fiche}); 
    res.render('page/fiche', {fiche: objectifFiche, infoList: infoList})

}


module.exports = {getFiche}