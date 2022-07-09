const MONGO_URI = "mongodb+srv://dbkynetic:Kynetic123123@01nextjscrud.pe9xg35.mongodb.net/?retryWrites=true&w=majority"
import mongoose from "mongoose"

const connectMongo = async () => {
    try {
        const {connection} = await mongoose.connect(MONGO_URI)
        if (connection.readyState == 1) {
            console.log("::: Database is connected.")
        }
    } catch (error) {
        return Promise.reject(error)
    }
}

export default connectMongo