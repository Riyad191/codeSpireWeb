const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.listen(4000, console.log("listening to port 4000"));

const port = process.env.port_url;

mongoose.connect(
  port,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("mongodb connected")
);
// mongoose.connect(
//   process.env.DATABASE_url,
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   () => console.log("mongodb connected")
// );

// DATABASE_url = mongodb://localhost/spire

// const spireRouter = require("./routes/spire");
// app.use("/spire", spireRouter);

const Schema = mongoose.Schema;
const codeSpireSchema = new Schema({
  firstName: String,
  lastName: String,
  course: String,
  emailAddress: String,
  phoneNumber: String,
  address: String,
  city: String,
});

codeSpire = mongoose.model("codeSpire", codeSpireSchema);
app.post("/spire/add", (req, res) => {
  res.send(res.body);
  const newCodeSpire = new codeSpire(req.body);
  newCodeSpire.save((error, newCodeSpire) => {
    if (error) {
      console.log({ status: 1, result: error });
    } else {
      console.log({ status: 1, result: newCodeSpire });
    }
  });
});

// -----------------------------------------------------------------

const contactsSchema = new Schema({
  fullName: String,
  email: String,
  message: String,
});

contacts = mongoose.model("contacts", contactsSchema);
app.post("/spire/contacts", (req, res) => {
  res.send(res.body);
  const newContacts = new contacts(req.body);
  newContacts.save((error, newContacts) => {
    if (error) {
      console.log({ status: 1, result: error });
    } else {
      console.log({ status: 1, result: newContacts });
    }
  });
});
