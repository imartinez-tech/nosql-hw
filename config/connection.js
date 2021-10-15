const { connect, connection } = require('mongoose');


// const connectionString = 
//     process.env.MONGODB_URI || 'mongodb://localhost/workoutDB' 


connect(process.env.MONGODB_URI || 'mongodb://localhost/workoutDB',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

module.exports = connection;