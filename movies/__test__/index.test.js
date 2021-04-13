const request = require("supertest");
const app = require("../app");
const movies = require("../lib/axios")
const { APICalls } = require("../models");

describe("success test", function(){
    afterAll(async () => {
        await APICalls.destroy({truncate: true})
    })
    describe("GET /search", function(){
        it("should return status 200", function(done){
            request(app)
                .get("/search/batman+begins/1")
                .end((err, res) => {
                    if(err) return done(err)
                    expect(res.status).toEqual(200)
                    return done()
                })
            
        })
    })

    describe("GET /detail", function(){
        it("should return status 200", function(done){
            request(app)
                .get("/detail/batman+begins")
                .end((err, res) => {
                    if(err) return done(err)
                    expect(res.status).toEqual(200)
                    return done()
                })
            
        })
    })
})

describe("fail test", function(){
    afterAll(async () => {
        await APICalls.destroy({truncate: true})
    })
    describe("GET /search", function(){
        it("should return status 404 when no movies found in the page", function(done){
            request(app)
                .get("/search/batman+begins/0")
                .end((err, res) => {
                    if(err) return done(err)
                    expect(res.status).toEqual(404)
                    return done()
                })
            
        })
    })

    describe("GET /search", function(){
        it("should return status 404 when movie title not found", function(done){
            request(app)
                .get("/search/batman+beginss/1")
                .end((err, res) => {
                    if(err) return done(err)
                    expect(res.status).toEqual(404)
                    return done()
                })
            
        })
    })

    describe("GET /detail", function(){
        it("should return status 404 when movies not found", function(done){
            request(app)
                .get("/detail/batman+beginss")
                .end((err, res) => {
                    if(err) return done(err)
                    expect(res.status).toEqual(404)
                    return done()
                })
            
        })
    })
})