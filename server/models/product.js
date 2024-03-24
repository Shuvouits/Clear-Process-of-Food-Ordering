const mongoose = require('mongoose');

const optionalSchema = new mongoose.Schema({
   
    id: {
        type: String,

    }
}, { _id: false });

const multiSchema = new mongoose.Schema({
    link: {
        type: String,
    },

}, { _id: false });

const sizeSchema = new mongoose.Schema({
    size: {
        type: String,
    },
    price: {
        type: String,
    }

}, { _id: false });

const specificationSchema = new mongoose.Schema({
    sname: {
        type: String,
    }

}, { _id: false });

const productSchema = new mongoose.Schema({
    productName: {
        type: String,

    },
    slug: {
        type: String,

    },
    category: {
        type: String,

    },
    status: {
        type: String,

    },

    price: {
        type: String,

    },

    offerPrice: {
        type: String,

    },

    vedioUrl: {
        type: String,
    },

    tdescription: {
        type: String,
    },

    bdescription: {
        type: String,

    },

    ldescription: {
        type: String,
    },

    populer: {
        type: String,
    },

    avatar: {
        type: String,
    },

    vavatar: {
        type: String,


    },

    optionalItem: {
        type: [optionalSchema],
        default: undefined

    },

    mavatar: {
        type: [multiSchema],
        default: undefined
    },
    productSize: {
        type: [sizeSchema],
        default: undefined
    },
    specification: {
        type: [specificationSchema],
        default: undefined
    }


}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);