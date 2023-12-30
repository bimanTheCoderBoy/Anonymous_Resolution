const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const cors = require("cors")
const dbConnect = require("./utils/database/dbConnect")
const userRoutes = require("./routes/userRoutes")
const resolutionRoutes = require("./routes/resolutionRoutes")
const thoughtRoutes = require("./routes/thoughtRought")
const errHandler = require("./utils/error/handler")

//Auth
const session = require("express-session")
const passport = require("passport")
const UserService = require("./services/user")
const OAuth2Strategy = require("passport-google-oauth20").Strategy;
const authMiddleware = require("./utils/auth/auth")

const runserver = async () => {
    const app = express();
    await dbConnect();
    //Middleware
    app.use(cors({
        origin: "http://localhost:5173",
        methods: "GET,POST,DELETE",
        credentials: true
    }))

    //json data parsing
    app.use(express.json())




    //session Setup
    app.use(session({
        secret: process.env.SESSION_SECRET || "nvnvnvbvnbvvbvbv",
        resave: false,
        saveUninitialized: true,
    }))

    //passport Setup
    app.use(passport.initialize())
    app.use(passport.session())
    //Google Oauth 2.0 Strategy
    passport.use(
        new OAuth2Strategy({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "/auth/google/callback",
            scope: ["profile", "email"]
        },
            async (accessToken, refreshToken, profile, done) => {
                try {
                    const user = await UserService.createUser({ email: profile.emails[0].value })
                    return done(null, user)
                } catch (error) {
                    return done(error, null)
                }
            }
        )
    )

    passport.serializeUser((user, done) => {
        done(null, user);
    })

    passport.deserializeUser((user, done) => {
        done(null, user);
    });

    // initial google ouath login
    app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

    app.get("/auth/google/callback", passport.authenticate("google", {
        successRedirect: "http://localhost:5173",
        failureRedirect: "http://localhost:5173/login"
    }))



    //authMiddleware
    // // app.use(authMiddleware)
    //routes
    app.use('/user', userRoutes)
    app.use('/resolution', resolutionRoutes)
    app.use('/thought', thoughtRoutes)
    //middleware for error handling
    app.use(errHandler)

    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
        console.log(`listening on http://localhost:${PORT}`);
    })

}

runserver();

