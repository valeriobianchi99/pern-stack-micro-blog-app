const express = require('express');
const passport = require('passport');
const router = express.Router();

// google authentication is invoked
router.get(
    "/google",
    passport.authenticate(
        "google", 
        {
            scope: "profile"
        }
    )
);

// callback after login
router.get(
    "/google/callback",
    passport.authenticate(
        "google",
        { 
            session: true
        }
    ),
    (req, res) => {
        res.redirect(`${process.env.CLIENT_URL}`)
    }
);

module.exports = router;