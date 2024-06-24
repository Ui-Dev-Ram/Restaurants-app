const { default: mongoose } = require("mongoose");

const resturantModel = new mongoose.Schema({
    name: String
});

export const resturantSchema = mongoose.models.resturant
|| mongoose.model("resturant", resturantModel);

