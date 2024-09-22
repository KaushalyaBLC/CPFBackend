// models/Industry.js
const mongoose = require('mongoose');

const SectorSchema = new mongoose.Schema({
  name: String,
  description: String,
});

const OpportunitySchema = new mongoose.Schema({
  name: String,
  description: String,
});

const SkillSchema = new mongoose.Schema({
  name: String,
  description: String,
});

const TrendSchema = new mongoose.Schema({
  name: String,
  description: String,
});

const CareerClusterSchema = new mongoose.Schema({
  path: String,
  name: String,
  description: String,
});

const IndustrySchema = new mongoose.Schema({
  path: String,
  name: String,
  scope: String,
  sectors: [SectorSchema],
  opportunity: [OpportunitySchema],
  skills: [SkillSchema],
  trends: [TrendSchema],
  careerpathways: String,
  education: String,
  careerClusters: [CareerClusterSchema],
});

const Industry = mongoose.model('Industry', IndustrySchema);

module.exports = Industry;
