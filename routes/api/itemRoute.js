const router = require("express").Router();
const Item = require("../../models/Item");
const passport = require("passport");

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    Item.find({ user: req.user._id })
      .then((item) => {
        res.json(item);
      })
      .catch((err) => {
        console.error(err);
      });
  }
);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    const newItem = Item({
      user: req.user._id,
      item: req.body.item,
    });

    newItem
      .save()
      .then((item) => {
        res.json({ item });
      })
      .catch((err) => console.error(err));
  }
);

router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    const id = req.params.id;
    Item.findById({ _id: id })
      .then((item) => {
        item.remove().then(() => {
          res
            .status(200)
            .json({ success: true, message: "deleted successfully." });
        });
      })
      .catch((err) => {
        res.status(401).json({ success: false, message: "id not found." });
      });
  }
);

module.exports = router;
