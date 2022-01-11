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
  "mongodb+srv://Hack_group3:HackYourFuture2022@cluster0.xekpo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use("/user", require("./Routes/UsersRoute"));
app.use("/", require("./Routes/LoginSignupRoute"));
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
