const mongoose = require("mongoose") 
const costumeSchema = mongoose.Schema({ 
    costume_type: String, 
    costume_name: {type:String,
        minLength:2,
        maxLength:30}, 
    units: {type:Number,
    min:2,
max:200} 
}) 
 
module.exports = mongoose.model("Costume", costumeSchema) 
