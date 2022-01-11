const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    default: null,
  },
  lastName: {
    type: String,
    required: true,
    default: null,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  bio: { type: String },
  role: { type: String },
  savedPodcasts: { type: Array },
  token: { type: String },
});

const UserData = mongoose.model("users_dbs", UsersSchema);
module.exports = UserData;
