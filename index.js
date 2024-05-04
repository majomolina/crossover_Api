const express= require('express');
const bodyParser= require("body-parser");
const monngoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const router = require( './routes/routes.js')


const app = express();
dotenv.config();
app.use(express.json());
app.use(bodyParser.json());

app.use(cors({ origin: ['*'],
methods: ['*'],
}));

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
    });
const PORT = process.env.PORT || 3008 



app.get('/', (req, res) => {
    res.send('Welcome to Mongo DB server')
});

app.use('/api', router);

app.listen(PORT, (req, res) => {
    console.log(`Server is running on ${PORT}`)
})

