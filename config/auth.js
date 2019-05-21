var passport = require("passport");
var GoogleStrategy = require("passport-google-oauth").OAuthStrategy;

// Use the GoogleStrategy within Passport.
//   Strategies in passport require a `verify` function, which accept
//   credentials (in this case, a token, tokenSecret, and Google profile), and
//   invoke a callback with a user object.
passport.use(new GoogleStrategy({
  consumerKey: "1016489823423-8q3qleq5ns0bkhh0lrcgnj4kqs4rc1pd.apps.googleusercontent.com",
  consumerSecret: "ziLWufLTn5sS2Xje9k_aztT8",
  callbackURL: "https://bnhproject2.herokuapp.com/#/"
},
function (token, tokenSecret, profile, done) {
  User.findOrCreate({ googleId: profile.id }, function (err, user) {
    return done(err, user);
  });
}
));