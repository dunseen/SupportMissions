const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://davys:davys190@pmpa-kkhkp.mongodb.net/project?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;

module.exports = mongoose;