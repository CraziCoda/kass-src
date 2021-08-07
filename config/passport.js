const passport = require('passport');
const LocalStrategy = require('passport-local');

passport.serializeUser((user, done)=>{
    done(null, user.id);
});

passport.deserializeUser((id, done)=>{
    //Code for db retrieve
});

passport.use(
    new LocalStrategy(({username}))
);