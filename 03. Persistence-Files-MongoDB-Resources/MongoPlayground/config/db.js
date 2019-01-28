const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/mongoPlayGround';

module.exports = mongoose.connect(connectionString);