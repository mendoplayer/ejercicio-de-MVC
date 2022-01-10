const {Router} = require("express");
const router = Router();
const {index} = require("../controllers/main");

router.get("/", index)


module.exports = router



/*
const express = require("express");
const router = express.Router();
const main = require("../controllers/main");

router.get("/", main.index)


module.exports = router
*/




