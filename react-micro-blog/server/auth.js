require("dotenv").config();
const passport = require("passport");
const { Strategy: GoogleStrategy } = require("passport-google-oauth20");
const pool = require("./db");

// tells passport to use google strategy
passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK_URL
        },
        async (accessToken, refreshToken, profile, done) => {
            const account = profile._json;
            let user = {};
            try {
                // create new user
                const currentUserQuery = await pool.query("SELECT * FROM users WHERE google_id = $1", [account.sub]);
                if (currentUserQuery.rows.length === 0) {
                    // create user
                    await pool.query(
                        "INSERT INTO users(username, img, google_id) VALUES ($1, $2, $3)",
                        [account.name, account.picture, account.sub]
                    );
                    const id = await pool.query(
                        "SELECT id FROM users WHERE google_id = $1",
                        [account.sub]
                    );
                    user = {
                        id: id.rows[0].id,
                        username: account.name,
                        img: account.picture
                    };
                } else {
                    // read existing user
                    const userInfo = currentUserQuery.rows[0];
                    user = {
                        id: userInfo.id,
                        username: userInfo.username,
                        img: userInfo.img
                    }
                }
                // done callback when authentication is done (can take error and user)
                done(null, user);
            } catch (err) {
                done(err);
            }
        }
    )
);

// stores user in the session
passport.serializeUser(
    (user, done) => {
        // loads into req.session.passport.user
        done(null, user);
    }
);

passport.deserializeUser(
    (user, done) => {
        // loads into req.user
        done(null, user);
    }
)