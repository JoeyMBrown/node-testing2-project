const router = require("express").Router();
const Dogs = require("./dogs-model.js");
const { checkForId } = require('./dogs-middleware');

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

module.exports = router;