import express from 'express';
import bodyParser from "body-parser";
import monngoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routes/routes.js'

const app = express();
dotenv.config();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
    });
const PORT = process.env.PORT || 3008 

monngoose
    .connect(process.env.DB_CONNECT)
    .then(() => {
        console.log('Database is connected')
    })
    .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('Welcome to Mongo DB server')
});

app.use('/api', router);

app.listen(PORT, (req, res) => {
    console.log(`Server is running on ${PORT}`)
})

