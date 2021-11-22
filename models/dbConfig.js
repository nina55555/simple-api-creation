
const mongoose = require('mongoose');


mongoose.connect(
    'mongodb://localhost:27017/defilé',{useNewUrlParser= true, useUnifyTopology= true}, (err)=> 
    {if (!err) console.log('mongodb successfully connected');
    else console.log ('connection error:' + err) 
    }
)