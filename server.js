// Import libraries
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

// Istantiate appplication
const app = express();

// Bodyparser middleware
app.use(bodyParser.json());

// Import DB Config
const db = require('./config/keys').mongoURI;

// Connect to DB
mongoose.connect(db, { useNewUrlParser: true})
    .then(() => console.log('Conneted to MongoDB!'))
    .catch(err => console.log(err));

// Use routes (endpoint, model)
app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));