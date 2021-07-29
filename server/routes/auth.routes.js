const { Router } = require("express");
const { registerUser, loginUser } = require("../controllers/authController");
const { check, validationResult } = require("express-validator");
const { registerValidators, loginValidators } = require("../utils/validators");
const router = Router();

router.post("/register", registerValidators, registerUser);
router.post("/login", loginValidators, loginUser);
module.exports = router;
