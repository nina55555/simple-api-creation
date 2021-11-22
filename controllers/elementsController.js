//modules necessaires:
const express = require('express');
const router = express.Router();

//recuperation des fichiers externes necessaires:
const {elementsModel} = require('../models/elementsModel');

//déclaration de la fonction du router:
router.get('/', (req, res) => 
    elementsModel.find((err, docs) => {
        if(!err) res.send (docs);
        else console.log ('error:'+ err);
    })
)

//exportation du router:
module.exports = router;