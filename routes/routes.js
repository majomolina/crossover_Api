const express = require ('express');
const{ validationResult } = require ('express-validator');



//call the MongoDB client
const mongoClient = require('../modules/mongoose_client.js');
//to pass the connection to the mongo model.
const restaurants = require('../modules/schemas.js')(mongoClient);

const router = express.Router();

//get all restaurants
router.get('/restaurants', async (req, res) => {
    const response = await restaurants.ModelRestaurant.find();
    res.json(response); 
}
);

//get restaurant by id
router.get('/restaurants/:id', async (req, res) => {
    const response = await restaurants.ModelRestaurant.findById(req.params.id);
    res.json(response);
}
);

//get restaurant by tags

router.get('/restaurants/tags/:tags', async (req, res) => 
{


    const response = await restaurants.ModelRestaurant.find({ tags: { $all: [ req.params.tags] }});
    res.json(response);
}
);

//get restaurant by tags by id
router.get('/restaurants/tags/:tags/:id', async (req, res) => 
{
    const response = await restaurants.ModelRestaurant.find({ tags: { $all: [ req.params.tags] }, _id: req.params.id });
    res.json(response);
}
);

//get restaurant by city
router.get('/restaurants/city/:city', async (req, res) => 
{
    const response = await restaurants.ModelRestaurant.find({ 'location.city': req.params.city });
    res.json(response);
}
);





module.exports = router;