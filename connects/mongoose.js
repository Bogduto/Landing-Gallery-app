import mongoose from 'mongoose'
const url = process.env.MONGODB_URI
const connectMongodb = async () => {
    await mongoose.connect(url, {
        dbName: 'work'
    }).then(() => {
        console.log("Connected to Database");
    }).catch((err) => {
        console.log("Not Connected to Database ERROR! ", err);
    });
}

export default connectMongodb