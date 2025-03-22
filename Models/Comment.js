const mongoose = require('mongoose');

// Definiowanie schematu komentarza
const commentSchema = new mongoose.Schema({
  product_id: {
    type: String, // Powiązanie z produktem
    ref: 'product', // Referencja do modelu Product
    required: true
},
user_id: {
    type: mongoose.Schema.Types.ObjectId, // Powiązanie z użytkownikiem
    ref: 'User', // Referencja do modelu User
    required: true
},
    text: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now // Automatycznie ustawia datę utworzenia
    }
});

module.exports = mongoose.model('Comment', commentSchema);