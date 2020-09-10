const router = require("express").Router();
const utils = require("../../config/utils");
const Auth = require("../../models/AuthModel");
const passport = require("passport");
const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

//routes @api/auth/signup

router.post("/signup", (req, res, next) => {
  if (!req.body.username)
    return res.status(400).json({
      success: false,
      type: "username",
      message: "Username are required.",
    });
  else if (!req.body.email) {
    return res
      .status(400)
      .json({ success: false, type: "email", message: "Email is required" });
  } else if (!emailRegexp.test(req.body.email)) {
    return res
      .status(400)
      .json({ success: false, type: "email", message: "Invalid Email." });
  } else if (!req.body.password)
    return res.status(400).json({
      success: false,
      type: "password",
      message: "Password is required",
    });
  else {
    const User = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    };
    const newPassword = utils.genPassword(User.password);
    const db_user = {
      username: User.username,
      email: User.email,
      mobile: "",
      hash: newPassword.hash,
      salt: newPassword.salt,
    };
    const NewUser = Auth(db_user);
    NewUser.save((err, result) => {
      if (err) {
        if (err.errors["email"].message) {
          res.status(400).json({
            success: false,
            type: "register",
            message: err.errors["email"].message,
          });
        }
      } else {
        const jwt = utils.issueJWT(result.id);
        res.status(200).json({
          success: true,
          message: "Registered Successfully",
          user: {
            username: result.username,
            email: result.email,
            id: result.id,
          },
          token: jwt.token,
          expires: jwt.expire,
        });
      }
    });
  }
});

//routes @api/auth/signin

router.post("/signin", (req, res, next) => {
  if (!req.body.email) {
    return res
      .status(400)
      .json({ success: false, type: "email", message: "Email is required" });
  } else if (!emailRegexp.test(req.body.email)) {
    return res
      .status(400)
      .json({ success: false, type: "email", message: "Invalid Email." });
  } else if (!req.body.password)
    return res.status(400).json({
      success: false,
      type: "password",
      message: "Password is required",
    });
  else {
    const User = {
      email: req.body.email,
      password: req.body.password,
    };
    Auth.findOne({ email: User.email }).then((result) => {
      if (!result) {
        return res.status(401).json({
          success: false,
          type: "email",
          message: "Email not registered.",
        });
      } else {
        const isValidPassword = utils.comparePassword(
          User.password,
          result.hash,
          result.salt
        );
        if (!isValidPassword) {
          return res.status(401).json({
            success: false,
            type: "password",
            message: "Wrong credential.",
          });
        } else {
          const jwt = utils.issueJWT(result.id);
          return res.json({
            success: true,
            message: "Logged in successfully.",
            user: {
              username: result.username,
              email: result.email,
              id: result.id,
            },
            token: jwt.token,
            expires: jwt.expire,
          });
        }
      }
    });
  }
});

router.get(
  "/getuser",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    res.json({
      success: true,
      user: {
        email: req.user.email,
        username: req.user.username,
        id: req.user._id,
      },
    });
  }
);

module.exports = router;
