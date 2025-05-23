const express = require("express")
const session = require("express-session");
const bodyParser = require("body-parser")
const app = express()
const cors = require("cors")
const cookieParser = require('cookie-parser');
app.use(cookieParser());
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
    credentials: true
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
const user = require("./routes/user")

app.use("/api/v1/element", elements)
app.use("/api/v1/user", user)
app.use(auth)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log("server is running on port", PORT);
})