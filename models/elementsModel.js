//modules necessaires:
const mongoose = require ('mongoose');

//déclaration du model via le module mongoose
const elementsModel = mongoose.model(
    "défilé",
    {
        nom: {
            type: String,
            require: true
        },
        description:{
            type: String,
            require: true
        }
    },
    "elements"
)

//exportation du model:
module.exports = {elementsModel}