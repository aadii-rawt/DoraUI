const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()

const elements = require("./routes/elements")

mongoose.connect(process.env.DB_CONNECTION,); // connect to the database

app.use(
    cors({
        origin : "http://localhost:5173",
        methods: ["GET", "POST", "PUT", "DELETE","PATCH"], 
    })
)

app.use(express.json())
app.use(bodyParser.json())


app.use("/api/v1/components", elements)


const PORT = process.env.PORT || 3000

app.listen(PORT,() => {
    console.log("server is running on port", PORT);
})