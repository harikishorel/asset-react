const mongoose = require('mongoose');

// Define the schema for the dealer collection
const dealerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  address: { type: String, required: true },
});

// Define the createDealer collection
const AddDealer = mongoose.model('CreateDealer', dealerSchema);


// Connect to the asset database
mongoose.connect('mongodb+srv://diwaarvind6:Diwa@cluster0.jxw0na0.mongodb.net/Asset?retryWrites=true&w=majority', { useNewUrlParser: true });

module.exports = AddDealer;
