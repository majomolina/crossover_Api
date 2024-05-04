const mongoose = require('mongoose');

const dotenv = require('dotenv');


// create the mongoose connection
//TODO: Check if connection exists
try{
    mongoose.connect("mongodb+srv://majo:AbLhkU2xa7vf0gB2@cluster0.gaeei2z.mongodb.net/crossover?retryWrites=true&w=majority&appName=Cluster0");
    console.log('Mongoose connection created');
}catch(err){
    console.log('Error creating mongoose connection: ' + err);
}


module.exports = mongoose;