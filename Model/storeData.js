const mongoose = require('mongoose');

// model is created here
const tagCollection = mongoose.Schema({
    welcome_txt: { type:String, required:true},
    paragraph: { type:String, required:true}
},{
    timestamps: true,
})

const tagModel = mongoose.model('tagModel',tagCollection);

module.exports = tagModel;