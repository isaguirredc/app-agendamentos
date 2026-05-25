const express = require("express");

const router = express.Router();

const controller = require("./scheduling.controller");

router.post("/", controller.criar);

router.get("/", controller.listar);

module.exports = router;