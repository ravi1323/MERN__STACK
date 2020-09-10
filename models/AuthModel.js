const mongoose = require("mongoose");
const Auth = require("../../../nodejs/ReactBack/models/auth");

const AuthSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  hash: {
    type: String,
    required: true,
  },
  salt: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  updated_at: {
    type: Date,
    default: Date.now(),
  },
});

// AuthSchema.path("email").validate(async (email) => {
//   const count = await mongoose.models.auth.countDocuments({ email });
//   return !count;
// }, "Email already registered.");

AuthSchema.path("email").validate(async (email) => {
  const count = await mongoose.models.auth.countDocuments({ email });
  return !count;
}, "Email already exist.");

module.exports = mongoose.model("auth", AuthSchema);
