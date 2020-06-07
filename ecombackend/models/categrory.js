const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
        subCategory: {
            type: String,
            ref: 'category'
        },
    },
    { timestamps: true }
);



module.exports = mongoose.model('category', categorySchema);