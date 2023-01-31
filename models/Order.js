const {Schema, model} = require('mongoose')

const Order = new Schema({
    userId: {type: Number, required: true},
    settings: {type: String, required: true},
    price: {type: Number, required: true},
    status: {type: String, required: true},
    date: {type: Date, default: Date.now}    
}, { versionKey: false })

module.exports = model('Order', Order)