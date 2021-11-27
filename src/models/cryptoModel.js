const mongoose = require('mongoose')
const cryptoCurrency = new mongoose.Schema({
    symbol: { type: String },
    name: { type: String},
    marketCapUsd: String,
    priceUsd: String
}, { timestamps: true } )
module.exports = mongoose.model('CryptoCurrencyData', cryptoCurrency)