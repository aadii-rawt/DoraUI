const express = require("express");
const passport = require("passport");
const { User } = require("../db/db");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const router = express.Router();
const GitHubStrategy = require("passport-github2").Strategy;


passport.serializeUser((user, done) => {
    done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
});

// google Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback"
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails?.[0]?.value;
        const googleId = profile.id;

        // 1. Check if user already exists with Google providerId
        let user = await User.findOne({ provider: 'google', providerId: googleId });
        if (user) {
          return done(null, user);
        }

        // 2. Check if user exists with the same email from another provider
        if (email) {
          user = await User.findOne({ email });
          if (user) {
            // Update user with Google info
            user.provider = 'google'; // optional: track latest used provider
            user.providerId = googleId;
            user.username = user.username || profile.displayName?.replace(/\s+/g, '').toLowerCase();
            user.profileImage = user.profileImage || profile.photos?.[0]?.value;
            await user.save();
            return done(null, user);
          }
        }

        // 3. If user not found by email or providerId, create new user
        const newUser = await User.create({
          provider: 'google',
          providerId: googleId,
          email: email,
          username: profile.displayName?.replace(/\s+/g, '').toLowerCase(), // or generate unique
          displayName: profile.displayName,
          profileImage: profile.photos?.[0]?.value
        });

        return done(null, newUser);
      } catch (err) {
        return done(err, null);
      }
    }
  )
);

// github Strategy
passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.GITHUB_CALLBACK_URL
},
async (accessToken, refreshToken, profile, done) => {
    try {
        const email = profile.emails?.[0]?.value;
        const githubId = profile.id;
        let user = await User.findOne({ provider: 'github', providerId: githubId });
        if (user) {
            return done(null, user);
        }

        if (email) {
            user = await User.findOne({ email });
            if (user) {
                user.provider = 'github'; // Optional if you want to store latest used provider
                user.providerId = githubId;
                user.username = user.username || profile.username;
                user.profileImage = user.profileImage || profile.photos?.[0]?.value;
                await user.save();
                return done(null, user);
            }
        }

        // 3. If no user with email or GitHub ID, create new user
        user = await User.create({
            provider: 'github',
            providerId: githubId,
            email: email,
            username: profile.username,
            displayName: profile.displayName,
            profileImage: profile.photos?.[0]?.value
        });

        return done(null, user);
    } catch (err) {
        return done(err, null);
    }
}));


// -------------------- google route -----------------
router.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get("/auth/google/callback",
    passport.authenticate("google", { session: false, failureRedirect: "/" }),
    (req, res) => {
        console.log("dfone");

        res.redirect("http://localhost:5173/elements"); // or your dashboard route
    }
);

// -------------------- github route -----------------
router.get('/auth/github', passport.authenticate('github', { scope: ['user:email'] }));

router.get('/auth/github/callback',

    passport.authenticate('github', {
        failureRedirect: '/login',
        session: true
    }),
    (req, res) => {
        res.redirect('http://localhost:5173/'); // Or your frontend route
    }
);


module.exports = router;
