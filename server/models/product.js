var mongoose = require("mongoose");

module.exports = function() {
    var ProductSchema = new mongoose.Schema({
        title: {type: String, required: [true, "Title is required!"], minlength: [4, "Title must be at least four characters!"]},
        price: {type: Number, required: [true, "Price is required!"]},
        image_url: {type: String}
    })
    
    mongoose.model("Product", ProductSchema)
}