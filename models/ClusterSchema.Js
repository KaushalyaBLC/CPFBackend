const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: String,
  description: String,
});

const educationSchema = new mongoose.Schema({
  name: String,
  description: String,
});

const ClusterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  path: { type: String, required: true },
  industry: { type: String, required: true },
  introduction: String,
  keySectors: [String],
  skills: [skillSchema],
  education: [educationSchema],
  careers: [{
    name: String,
    description: String,
  }],
});

const Cluster = mongoose.model('Cluster', ClusterSchema);

module.exports = Cluster;
