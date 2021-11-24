 //modules necessaires:
 const express = require('express');
const { use } = require('./controllers/elementsController');
 const app = express();
 const mongoose =require('mongoose')


 //récupération des fichiers externes necessaire:
 require ("./models/dbConfig");
 const elementsControl = require('./controllers/elementsController');


//middlewares:
//pour lire (parser) le format json mis dans la methode post 
 app.use(express.json() );
//*si on veut gerer le middleware d'encodage d'url pour eviter les valeurs undefined 
 //app.use(express.urlencoded({extended: false}) );
 //*en cas de warning
 //mongoose.set('useFindAndModify', false);
 app.use('/articles', elementsControl);
 

 //lancement du port:
 app.listen(5500, () => console.log("Server listening on port 5500") );