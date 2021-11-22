
const express = require('express');
const router = express.Router();

const {elementsModel} = require('../models/elementsModel');

router.get('/', (req, res) => 
    elementsModel.find((err, docs) => {
        if(!err) res.send (docs);
        else console.log ('error:'+ err);
    })
)

module.exports = router;