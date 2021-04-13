const env = process.env.NODE_ENV
if( env === "development" || env === "test"){
    require("dotenv").config()
}

const express = require("express")
const app = express()
const router = require("./routes")
const cors = require("cors")
const { errorHandler } = require("./middlewares/errorHandler")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(router)
app.use("/", (req, res) => {
    res.status(200).json({message: "movie app"})
})

app.use(errorHandler)

module.exports = app