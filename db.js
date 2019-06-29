let DATABASE_NAME = 'securing-rest-apis-with-jwt';

var mongoose = require('mongoose');
mongoose.connect(`mongodb://127.0.0.1:27017/${DATABASE_NAME}`, { useMongoClient: true }, (error, client) => {
  if (error) {
    throw error;
  }
  //default collection name is users
  console.log("Connected to " + DATABASE_NAME + " in Mongodb !");

});