function errorHandler(err, req, res, next){
    if(err.errorCode && err.errorCode === 404){
        res.status(404).json(err)
    }
    res.status(500).json({"message": "internal server error"})
}

module.exports = { errorHandler }