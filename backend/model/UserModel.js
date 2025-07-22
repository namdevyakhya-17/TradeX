const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { userSchema } = require("../schemas/UserSchema.js");

module.exports = mongoose.model("User", userSchema);