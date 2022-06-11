const mongoose = require('mongoose'); 
const reportSchema = require('../models/report.modele')

const getStuckReport = async(req, res) => {
    const report = await reportSchema.find({})

    res.render('page/report', {report: report})

}


module.exports = {getStuckReport}