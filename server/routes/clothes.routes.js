const { Router } = require("express");
const {
  getClothes,
  getClothesById,
} = require("../controllers/clothesController");

const { check, validationResult } = require("express-validator");
const { registerValidators, loginValidators } = require("../utils/validators");
const router = Router();
router.get("/", getClothes);
router.get("/:id", getClothesById);
module.exports = router;
