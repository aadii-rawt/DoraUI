// config/passport.js
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "/auth/google/callback"
        },
        async (accessToken, refreshToken, profile, done) => {
            console.log("user profile: ", profile);
            
            // const existingUser = await User.findOne({ googleId: profile.id });
            // if (existingUser) return done(null, existingUser);
            // const newUser = await User.create({
            //     googleId: profile.id,
            //     name: profile.displayName,
            //     email: profile.emails?.[0]?.value,
            //     avatar: profile.photos?.[0]?.value,
            //     provider: 'google',
            // });
            return done(null, {name: "adi"});
        }
    )
);

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
    // const user = await User.findById(id);
    done(null, {name: "adi"});
});