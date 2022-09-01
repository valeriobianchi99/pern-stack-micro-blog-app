// has to be here to access the .env file
require("dotenv").config();

// imports
const express = require('express');
const cors = require("cors");
const session = require('express-session');
const passport = require("passport");

// executes the auth script to tell passport how to act
require('./auth.js');


// initialize the app as an express instance
const app = express();

// cors between client-server (FE-BE in this case)
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}));

app.use(express.json());


// session structure
app.use(session({
    secret: process.env.COOKIE_SECRET,
    cookie: {
        secure: process.env.NODE_ENV === "production" ? true : "auto",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax"
    },
    resave: false,
    saveUninitialized: false
}));

// middleware to inizialize the passport module
app.use(passport.initialize());

// middleware that alters the request object reading the session id stored in it
app.use(passport.session());

// routes for children path of /
const indexRouter = require("./routes/indexRouter");
app.use("/", indexRouter);

// routes for children path of /auth
const authRouter = require("./routes/authRouter");
app.use("/auth", authRouter);

// app listening on port
app.listen(process.env.PORT || 4000, () => {
    console.log(`Server listening on port ${process.env.PORT || 4000}`);
});