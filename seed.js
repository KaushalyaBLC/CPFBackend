// seed.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Cluster = require('./models/ClusterSchema.Js')
const Industry = require('./models/IndustrySchema.js')
const data = require('./models/industry.js');

dotenv.config();

const uri = process.env.MONGO_URI || "mongodb+srv://chamathkaushalya8:P9w8RrNQqQkOGTfH@cluster0.ugdsf75.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected...');
}).catch(err => {
  console.log('MongoDB connection error:', err);
});

const seedDB = async () => {
  await Industry.deleteMany({});
  await Industry.insertMany(data);
  console.log('Data successfully inserted!');
};

seedDB().then(() => {
  mongoose.connection.close();
});
