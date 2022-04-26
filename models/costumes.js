const mongoose = require("mongoose") 
const costumeSchema = mongoose.Schema({ 
    costume_type: String, 
    costume_name: String, 
    units: {type:Number,
    min:2,
max:200} 
}) 
 
module.exports = mongoose.model("Costume", costumeSchema) 
