const mongoose = require ('mongoose');

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

module.exports = {elementsModel}