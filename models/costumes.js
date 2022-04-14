const mongoose = require("mongoose") 
const costumeSchema = mongoose.Schema({ 
    costume_type: String, 
    costume_name: String, 
    units: Number 
}) 
 
module.exports = mongoose.model("Costume", costumeSchema) 
