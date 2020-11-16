import mongoose from 'mongoose'


const connectDB = handler => async (req, res) => {

    if (mongoose.connections[0].readyState !== 1) {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true
        })
    }

    return handler(req, res);
}


const db = mongoose.connection;

db.once('open', () => {
    console.log('Connected to mongo')
});

db.on('error', (err) => {
    console.log(err, 'err')
})


export default connectDB