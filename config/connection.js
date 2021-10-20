const mongoose = require('mongoose');


// const connectionString = 
//     process.env.MONGODB_URI || 'mongodb://localhost/workoutDB' 


const connection = async () => { 
    try { 
        await mongoose 
        .connect(process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    }) 
}   catch (err) {
    throw(err)
}
}

module.exports = connection;