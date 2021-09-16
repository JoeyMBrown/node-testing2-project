const router = require("express").Router();
const Dogs = require("./dogs-model.js");

router.get("/", (req, res, next) => {
    Dogs.find()
        .then((dogs) => {
            res.status(200).json(dogs)
        })
        .catch(next)
})

module.exports = router;