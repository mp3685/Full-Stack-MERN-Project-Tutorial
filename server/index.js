import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';
import apiRoutes from './routes/api.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);
app.use('/user', userRoutes);
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    res.send('Hello to Memories API');
    
    // res.write('Hello to Memories API');
    // res.write(`${process.env.REACT_APP_GOOGLE_API_TOKEN}`);
    // console.log(req.headers);
    // console.log(res);
    // res.end();
});

// app.get('/api', (req, res) => {
//     res.send({data: process.env.REACT_APP_GOOGLE_API_TOKEN});
// });

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.REACT_APP_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

//mongoose.set('useFindAndModify', false); //Deprecated

// https://www.mongodb.com/cloud/atlas
