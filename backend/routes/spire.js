const { json } = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const spireSchema = require("../models/spireSchema");

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
router.post("/add", (req, res) => {
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

// router.get("/", async (req, res) => {
//   try {
//     const spire = await Spire.find();
//     res.json(spire);
//   } catch (error) {
//     send.status(500).json({ message: err.message });
//   }
// });
// //Get
// router.get("/:id", getSpire, (req, res) => {
//   res.send(res.spire);
// });
// Post

// router.post("/add", async (req, res) => {
//   const spires = new spireSchema({
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     coures: req.body.coures,
//     phoneNumber: req.body.phoneNumber,
//     emailAddress: req.body.emailAddress,
//     address: req.body.address,
//     city: req.body.city,
//   });
//   console.log(req.body);
//   console.log("before try");
//   try {
//     const newSpire = await spires.save();
//     console.log("after try");
//     res.json(newSpire);
//   } catch (err) {
//     res.json({ message: err.message });
//   }
//   console.log("after catch");
// });

// Update
// router.patch("/:id", getSpire, async (req, res) => {
//   if (req.body.firstName != null) {
//     res.spire.firstName = req.body.firstName;
//   }
//   if (req.body.lastName != null) {
//     res.spire.lastName = req.body.lastName;
//   }
//   if (req.body.emailAddress != null) {
//     res.spire.emailAddress = req.body.emailAddress;
//   }
//   if (req.body.phoneNumber != null) {
//     res.spire.phoneNumber = req.body.phoneNumber;
//   }
//   if (req.body.address != null) {
//     res.spire.address = req.body.address;
//   }
//   if (req.body.city != null) {
//     res.spire.city = req.body.city;
//   }

//   try {
//     const updatedStudent = await res.spire.save();
//     res.json(updatedStudent);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });
// Delete
// router.delete("/:id", getSpire, async (req, res) => {
//   try {
//     await res.spire.remove();
//     res.json({ message: "Deleted student" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });
// async function getSpire(req, res, next) {
//   let spire;
//   try {
//     spire = await spireSchema.findById(req.params.id);
//     if (spire == null) {
//       return res.status(404).json({ message: "connot find it" });
//     }
//   } catch (err) {
//     return res.status(500).json({ message: err.message });
//   }
//   res.spire = spire;
//   next();
// }
module.exports = router;
