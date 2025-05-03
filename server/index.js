const express = require("express")
const session = require("express-session");
const bodyParser = require("body-parser")
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()
const passport = require("passport");

app.use(express.json())
app.use(bodyParser.json())

mongoose.connect(process.env.DB_CONNECTION).then(() => {
  console.log("Database connected...");
})

app.use(
    cors({
        origin: process.env.CLIENT_URL,
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    })
)

app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: true,
    })
);

app.use(passport.initialize());
app.use(passport.session());





const elements = require("./routes/elements")
const auth = require("./routes/auth")

app.use("/api/v1/components", elements)
app.use("/api/auth", auth)


const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log("server is running on port", PORT);
})