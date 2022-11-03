const mongoose = require("mongoose")

//function to connect
module.exports = async () => {
    try {
        await mongoose.connect(process.env.DB_URI_STRING)
        console.log("connected to db")
    } catch (error) {
        console.log("🚀 ~ file: db.js ~ line 8 ~ db connection failed: ", error.message)

        process.exit(1)
    }
}