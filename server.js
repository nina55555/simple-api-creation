 //modules necessaires:
 const express = require('express');
 const app = express();
 const mongoose =require('mongoose');
 const cors = require('cors');


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
 //pour gerer l'accés à l'api au public
 //app.use(cors({origin: '//adresse du site a qui l'ont veut donner accès'}))
 app.use(cors());
 app.use('/', elementsControl);
 

 //lancement du port:
 app.listen(5000, () => console.log("Server listening on port 5500") );