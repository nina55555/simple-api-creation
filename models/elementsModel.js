//modules necessaires:
const mongoose = require ('mongoose');

//déclaration du model via le module mongoose
const ElementsModel = mongoose.model(
    "défilé",
    {
        name: {
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
module.exports = {ElementsModel}