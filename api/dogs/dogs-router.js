const router = require("express").Router();
const Dogs = require("./dogs-model.js");
const { checkForId, checkRequestBody } = require('./dogs-middleware');

router.get("/", (req, res, next) => {
    Dogs.find()
        .then((dogs) => {
            res.status(200).json(dogs)
        })
        .catch(next)
})

router.get("/:id", checkForId, (req, res, next) => {
    res.status(200).json(req.dog)
})

router.post("/", checkRequestBody, (req, res, next) => {
    Dogs.addDog(req.body)
        .then((dog) => {
            res.status(201).json(dog)
        })
        .catch(next)
})

router.delete("/:id", checkForId, (req, res, next) => {
    Dogs.deleteDog(req.params.id)
        .then((dogs) => {
            res.status(200).json(dogs)
        })
        .catch(next)
})

module.exports = router;