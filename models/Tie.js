const {Schema, model} = require('mongoose')

const Tie = new Schema({
    sellerId: {type: String, require: true},
    name: {type: String, require: true},
    picture: {type: String}  
}, { versionKey: false })

module.exports = model('Tie', Tie)