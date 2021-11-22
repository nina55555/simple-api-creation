 //modules necessaires:
 const express = require('express');
 const app = express();

 //récupération des fichiers externes necessaire:
 require ("./models/dbConfig");
 const elementsControl = require('./controllers/elementsController');

//middlewares:
 app.use('/', elementsControl);
 
 //lancement du port:
 app.listen(5500, () => console.log("Server listening on port 5500") );