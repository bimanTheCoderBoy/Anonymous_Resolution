const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const cors=require("cors")
const dbConnect = require("./utils/database/dbConnect")
const userRoutes = require("./routes/userRoutes")
const resolutionRoutes = require("./routes/resolutionRoutes")
const thoughtRoutes = require("./routes/thoughtRought")
const errHandler = require("./utils/error/handler")



const runserver = async () => {
    const app = express();
    await dbConnect();
    //Middleware
    app.use(cors({
        origin:"*",
        methods:"GET,POST,DELETE",
        credentials:true}))
    app.use(express.json())

    app.use('/user', userRoutes)
    app.use('/resolution',resolutionRoutes)
    app.use('/thought',thoughtRoutes)
    app.use(errHandler)

    app.get("/*",(req,res)=>{
        res.send("ok server working")
    })
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
        console.log(`listening on http://localhost:${PORT}`);
    })

}

runserver();

