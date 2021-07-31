const { Schema, model, Types } = require("mongoose");
const schema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: String,
    required: true,
  },
  frontPicture: {
    type: String,
    required: true,
  },
  additionalPicture: String,
  fabric: {
    type: String,
    required: true,
  },
  product_descr: String,

  color: String,
  kind: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },

  //   links: [{ type: Types.ObjectId, ref: "Link" }],
});
module.exports = model("User", schema);
