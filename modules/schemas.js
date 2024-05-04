const { text } = require("express");

module.exports = function(mongoClient){

    const Schemalocation = new mongoClient.Schema({
        address: String,
        city: String,
        state: String,
        zipCode: String,
    });
    const SchemaReview= new mongoClient.Schema({
        user_id: String,
        rating: Number,
        text: String,
    });


    const ModelRestaurant = mongoClient.model('restaurant', {
        name: String,
        location: Schemalocation,
        tag:[String],
        rating: Number,
        review: [SchemaReview],
       
    });
    return {
        ModelRestaurant
    };
}

