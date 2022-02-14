const mongoose = require('mongoose');

const connection = () => {
    mongoose.connect('mongodb://localhost:27017/userdata', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('Database connected sucessfully...');
    }).catch(() => {
        console.log('Failed to connect to database', error);
    });
};

module.exports = connection;