
const mongoose = require('mongoose');


mongoose.connect(
    "mongodb://localhost:27017/défilé", (err)=> {
        if (!err) console.log('mongodb successfully connected');
        else console.log ('connection error:' + err) 
    }
)