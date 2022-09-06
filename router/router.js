const express = require("express");

const Student = require("../model/student");

const router = express.Router();

//Get all data

router.get("/students", async (req, res) => {
  const user = await Student.find();
  res.send(user);
});

// create a new students
router.post("/students", async (req, res) => {
  const user = new Student(req.body);
  await user.save();
  res.send(user);
});

//Get Individual data
router.get("/students/:id", async (req, res) => {
  try {
    const post = await Student.findOne({ _id: req.params.id });
    res.send(post);
  } catch {
    res.send({ error: "Post doesn't exist!" });
  }
});

//Update data
router.patch("/students/:id", async (req, res) => {
  const _id = req.params.id;
  const updateUser = await Student.findOneAndUpdate({ _id: _id }, req.body, {
    new: true,
  });

  res.send(updateUser);
});

//delete data
router.delete("/students/:id", async (req, res) => {
  const _id = req.params.id;
  const deleteUser = await Student.deleteOne({ _id: _id });
  res.send(deleteUser);
});

module.exports = router;
