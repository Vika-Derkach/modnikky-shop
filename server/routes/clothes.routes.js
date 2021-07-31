const { Router } = require("express");
const { getClothes } = require("../controllers/clothesController");

const { check, validationResult } = require("express-validator");
const { registerValidators, loginValidators } = require("../utils/validators");
const router = Router();
router.get("/", getClothes);

module.exports = router;
