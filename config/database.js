const mongoose = require("mongoose")

require("dotenv").config()
const DB_URL = process.env.DATABASE_URL

const dbConnection = () => {

    mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log("successfull connected to db"))
        .catch((err) => {
            console.log(err);
            console.error(err);
            console.log("not able to connect with db");
        })


}

module.exports = dbConnection