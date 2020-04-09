const routes = require('./routes');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://davys:davys190@pmpa-kkhkp.mongodb.net/project?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
app.use(express.json());
app.use(routes);

app.listen(3333);