const express = require("express");
const passport = require("passport");
const router = express.Router();

passport.serializeUser((user,done) => done(null, user.id));
passport.deserializeUser(async (id,done) => {
  done(null, user);
})

// Step 1: Trigger Google Auth
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Step 2: Handle Google callback
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: `${process.env.CLIENT_URL}/login`,
    session: true,
  }),
  (req, res) => {
    // Redirect to frontend with user info (or token in production)
    res.redirect(`${process.env.CLIENT_URL}/dashboard`);
  }
);

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/auth/google/callback",
    },

  )
)



module.exports = router;
