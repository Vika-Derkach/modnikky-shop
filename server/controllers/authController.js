const User = require("../models/User");
const { check, validationResult } = require("express-validator");
const config = require("config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.registerUser = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: "Incorrect data during registration",
      });
    }
    const { email, password } = req.body;
    const candidate = await User.findOne({ email });
    ///check if there are no the same user
    if (candidate) {
      return res.status(400).json({ message: "Such user already exists" });
    }
    ///якщо такого немає то створюємо нового User
    const hashedPassword = await bcrypt.hash(password, 11); //шифруємо пароль
    const user = new User({ email, password: hashedPassword });

    ///чекаємо  поки він збережеться
    await user.save();
    //передаємо на фронт
    res.status(201).json({ message: "User has been created" });
    //fetch('/register', {method: 'POST', body: JSON.stringify({email: 'fdsfds'})}).then((res) => res.json()).then(data => {console.log(data)})
  } catch (error) {
    next(error);
  }
};
exports.loginUser = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: "Incorrect data during logining",
      });
    }
    const { email, password } = req.body;
    //шукаємо ВЖЕ СТВОРЕНОГО USER IN DATABASE
    const user = await User.findOne({ email });

    //якщо немає такого user то викидаємо помилку
    if (!user) {
      return res.status(400).json({ message: "The User hasn't been found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect password, try again" });
    }
    //token шифровка
    const token = jwt.sign({ userId: user.id }, config.get("jwtSecret"), {
      expiresIn: "1h",
    });
    // відповідь user
    res.json({ token, userId: user.id });
  } catch (error) {
    next(error);
  }
};
