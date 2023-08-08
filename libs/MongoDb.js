import mongoose from "mongoose";

const ConnectMongoDb = async () =>{
    try {
       await mongoose.connect(process.env.MONGODB_URI)
        console.log("mongodb connected")
    } catch (error) {
        console.log(error)
    }
}

export default ConnectMongoDb;