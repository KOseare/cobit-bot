const mongoose = require('mongoose');
const ip = 'mongodb://127.0.0.1:27017/cobit-19';
const db = mongoose.connection;

mongoose.connect(ip, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

db.once('open', _ => {
    console.log('Database is connected to ', ip);
});

db.on('error', err => {
    console.log(err);
});