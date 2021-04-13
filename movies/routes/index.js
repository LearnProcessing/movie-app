const router = require("express").Router()
const Controller = require("../controllers")

router.use("/search/:keywords/:page", Controller.searchMovies)
router.use("/detail/:title", Controller.movieDetails)

module.exports = router