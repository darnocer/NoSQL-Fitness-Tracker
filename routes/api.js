const router = require("express").Router();
const db = require("../models");

router.get("/api/workouts", ({ body }, res) => {
  db.Workout.find({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/api/workouts", (req, res) => {
  db.Workout.create(req.body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/api/workouts/:id", function (req, res) {
  db.Workout.update({ _id: req.params.id }, { $push: { exercises: req.body } })
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .then((range) => {
      res.json(range);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
