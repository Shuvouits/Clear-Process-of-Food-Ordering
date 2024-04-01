const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
   
    email: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },

    avatar: {
        type: String,
        default: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.png',

    },

   
}, { timestamps: true });

module.exports = mongoose.model("Customer", customerSchema);