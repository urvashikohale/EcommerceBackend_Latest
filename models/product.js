const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema; //ObjectId is used for childSchema

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required: true,
        maxlength: 32
    },
    description:{
        type:String,
        trim:true,
        required: true,
        maxlength: 2000
    },
    price:{
        type:Number,
        trim:true,
        required: true,
        maxlength: 32
    },
    //child schema
    category:{
        type: ObjectId, //here you mention type ObjectId only with O capital
        ref:"Category", //from where parent category gonna come 
        required: true
    },
    stock:{
        type: Number,
    },
    sold:{
        type:Number,
        default:0
    },
    photo:{
        data:Buffer, // buffer is used to save items in binary form  
        contentType: String 

    }
},{timestamps: true})


    module.exports = mongoose.model("Product",productSchema);