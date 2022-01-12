const UserModel = require("../models/Signup");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

async function loginUser(email, password) {
  try {
    if (!(email && password)) {
      return "All input is required";
    }
    const dbUser = await UserModel.findOne({ email });
    if (dbUser && (await bcrypt.compare(password, dbUser.password))) {
      const token = jwt.sign({ user_id: dbUser._id }, process.env.TOKEN_KEY, {
        expiresIn: "2h",
      }, (err, token) => {
        if (err) { console.log(err) }
        res.send(token);
      });
      console.log(token)
      dbUser.token = token;
      return dbUser;
    }
    return dbUser;
  } catch (err) {
    return err;
  }
}

async function addNewUser(email, firstName, lastName, password, phoneNumber) {
  const oldUser = await UserModel.findOne({ email });
  if (oldUser) return "oldUser";

  const encryptedPassword = await bcrypt.hash(password, 10);

  const dbUser = new UserModel({
    firstName: firstName,
    email: email,
    lastName: lastName,
    password: encryptedPassword,
    phoneNumber: phoneNumber,
    savedPets: [],
    role: "",
    bio: "",
  });

  const token = jwt.sign({ user_id: dbUser._id }, process.env.TOKEN_KEY, {
    expiresIn: "2h",
  });

  dbUser.role = "user";
  dbUser.bio = "Hello";
  dbUser.token = token;

  await dbUser.save();
  return dbUser;
}

async function updateUserDetails(userId, userData) {
  const { firstName, lastName, email, password, bio, phoneNumber } = userData;
  try {
    if (password !== undefined) {
      UserModel.findByIdAndUpdate(
        userId,
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          bio: bio,
          phoneNumber: phoneNumber,
          password: await bcrypt.hash(password, 10),
        },
        { new: true },
        (err, result) => {
          if (err) {
            return err;
          }
          return result;
        }
      );
    } else {
      UserModel.findByIdAndUpdate(
        userId,
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          bio: bio,
          phoneNumber: phoneNumber,
        },
        { new: true },
        (err, result) => {
          if (err) {
            return err;
          }
          return result;
        }
      );
    }
  } catch (err) {
    return err;
  }
}

async function getUserFromDBById(userId) {
  try {
    const userFromDB = await UserModel.findOne({ _id: userId });
    if (!userFromDB) return "No user is found";
    return userFromDB;
  } catch (err) {
    return err;
  }
}

module.exports = {
  loginUser,
  addNewUser,
  updateUserDetails,
  getUserFromDBById,
};
