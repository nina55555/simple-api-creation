//modules necessaires:
const express = require('express');
const router = express.Router();
const ObjectId =require('mongoose').Types.ObjectId;



 

//recuperation des fichiers externes necessaires:
const { ElementsModel } = require('../models/elementsModel');

//déclaration des fonctions du router methode CRUD:
//pour lire les articles:
router.get('/', (req, res) => {
    ElementsModel.find((err, docs) => {
        if(!err) res.send (docs);
        else console.log ('error:'+ err);
    })
});



    
//exportation du router:
module.exports = router