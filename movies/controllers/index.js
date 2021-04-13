const { movies } = require("../lib/axios")
const { APICalls } = require("../models")

class Controller {
    static async searchMovies(req, res, next) {
        try {
            console.log(process.env.APIKEY, '>>>>>>>>>>')
            const searchKeywords = req.params.keywords
            const page = req.params.page || 1
            const searchResults = await movies.get(`/?apikey=${process.env.APIKEY}&s=${searchKeywords}&page=${page}`)
            await APICalls.create({
                endpoint: "/search",
                parameters: searchKeywords
            })
            if(searchResults.data.Response === "False") {
                throw {errorCode: 404, message: "Movie not found"}
            }
            res.status(200).json(searchResults.data)
        } catch (error) {
            next(error);
        }
    }

    static async movieDetails(req, res, next) {
        try {
            const title = req.params.title
            const response = await movies.get(`/?apikey=${process.env.APIKEY}&t=${title}`)
            await APICalls.create({
                endpoint: "/details",
                parameters: title
            })
            if(response.data.Response === "False") {
                throw {errorCode: 404, message: "Movie not found"}
            }
            res.status(200).json(response.data)
        } catch (error) {
            next(error);
        }
    }
}

module.exports = Controller