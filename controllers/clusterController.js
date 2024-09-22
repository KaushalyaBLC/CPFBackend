const express = require('express');
const Cluster = require('../models/ClusterSchema');

const clusterController = async (req, res) => {
    try {
      const industry = req.params.industry;
      const cluster = req.params.cluster;
  
      // Find the cluster based on industry and cluster name
      const clusterData = await Cluster.findOne({ industry: industry, path: cluster });
  
      if (clusterData) {
        res.send(clusterData);
      } else {
        res.status(404).send({ message: 'Cluster not found' });
      }
    } catch (error) {
      res.status(500).send({ message: 'Server error', error: error.message });
    }
  };
  
  module.exports = clusterController;