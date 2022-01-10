require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
// app.use(express.json());
app.use(cors());
app.use(express.json({ limit: "5mb", extended: true }));
app.use(express.urlencoded({ limit: "5mb", extended: true }));
const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;
const { MONGO_URI } = process.env;
mongoose.connect(
  "mongodb+srv://Ukiplezet:oIv0EqLP0kdqd1K0@cluster0.vheon.mongodb.net/users_db?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use("/*", require("./Routes"));

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
