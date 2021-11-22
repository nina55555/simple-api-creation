 const express = require('express');
 const app = express();

 require ("./models/dbConfig");
 const elementsControl = require('./controllers/elementsController');


 app.use('/', elementsControl);
 
 app.listen(5500, () => console.log("Server listening on port 5500") );