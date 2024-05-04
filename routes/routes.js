const express = require ('express');
const{ validationResult } = require ('express-validator');



//call the MongoDB client
const mongoClient = require('../modules/mongoose_client.js');
//to pass the connection to the mongo model.
const restaurants = require('../modules/schemas.js')(mongoClient);

const router = express.Router();

//get all restaurants
router.get('/restaurants', async (req, res) => {
    const restaurant = await restaurants.find();
    res.json(response); 
}
);




module.exports = router;