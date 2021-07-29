const { Schema, model, Types } = require("mongoose");
const schema = new Schema({
  name: String,
  lastName: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  cart: {
    items: [
      {
        count: {
          type: Number,
          required: true,
          default: 1,
        },
        clothesId: {
          type: Schema.Types.ObjectId,
          ref: "Cloth",
          required: true,
        },
      },
    ],
  },
  //   links: [{ type: Types.ObjectId, ref: "Link" }],
});
module.exports = model("User", schema);
