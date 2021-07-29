const { Router } = require("express");
const { registerUser } = require("../controllers/authController");
const { check, validationResult } = require("express-validator");
const { registerValidators } = require("../utils/validators");
const router = Router();

router.post("/register", registerValidators, registerUser);

module.exports = router;
