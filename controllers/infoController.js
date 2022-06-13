const mongoose = require('mongoose'); 
const infoSchema = require('../models/info.modele')

const getInfo = async(req, res) => {
    const info = await infoSchema.find({}); 
    console.log(info)
    res.render('page/info', {info: info})

}


module.exports = {getInfo}