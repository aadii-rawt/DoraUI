const express = require("express")
const session = require("express-session");
const bodyParser = require("body-parser")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()
const passport = require("passport");
// require("./src/passportSetup"); 

app.use(express.json())
app.use(bodyParser.json())

// mongoose.connect(process.env.DB_CONNECTION); // connect to the database

app.use(
    cors({
        origin: process.env.CLIENT_URL,
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    })
)
app.use(
    session({
        secret: process.env.SESSION_SECRET, // Use env variable in production
        resave: false,
        saveUninitialized: false,
        cookie: {
          secure: false, // true in production with HTTPS
          httpOnly: true,
          maxAge: 1000 * 60 * 60 * 24, // 1 day
        },
    })
);

app.use(passport.initialize());
app.use(passport.session());


const elements = require("./routes/elements")
const auth = require("./routes/auth")


app.use("/api/v1/components", elements)
app.use("/api/auth", auth)


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("server is running on port", PORT);
})