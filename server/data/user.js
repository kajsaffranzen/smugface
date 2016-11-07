var mongoose = require("mongoose");
var userSchema = mongoose.Schema({
    userId: String,
    name: String,
    tagline: String,
    rating: Number,
    imagePreviewUrl: String
});

module.exports = mongoose.model("user", userSchema);