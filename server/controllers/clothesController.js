const Clothes = require("../models/Clothes");
const { check, validationResult } = require("express-validator");
const config = require("config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
exports.getClothes = async (req, res, next) => {
  try {
    const clothes = await Clothes.find();

    res.json(clothes);
  } catch (error) {
    next(error);
  }
};
exports.getClothesById = async (req, res, next) => {
  try {
    const clothes = await Clothes.findById(req.params.id);

    res.json(clothes);
  } catch (error) {
    next(error);
  }
};
