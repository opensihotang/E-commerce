import express, { Router } from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import passport from "passport";
import authenticate from "../middleware/authetication.js";

const router = express.Router();

function generateToken(user) {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.EXP_TOKEN,
  });
}

//REGISTER
router.post("/register", async (req, res) => {
  const { name, username, phone, role, password } = req.body;
  console.log(req.body);
  try {
    User.register(
      {
        name,
        username,
        phone,
        role,
      },
      password,
      (err, user) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        } else {
          const token = generateToken(user);
          res.status(200).cookie("token", token).json({ isRegister: true });
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    passport.authenticate("local", (err, user) => {
      console.log(user);
      if (err) {
        return res.status(500).json({ error: err.message });
      } else if (!user) {
        return res.status(404).json({ message: "Username/Password salah" });
      } else {
        req.login(user, function (error) {
          if (error) {
            return res.status(500).json(error);
          } else {
            const token = generateToken(user);
            return res
              .status(200)
              .cookie("token", token)
              .json({ isLogin: true });
          }
        });
      }
    })(req, res);
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

router.get(
  "/profile",
  authenticate(["admin", "user"]),
  async (req, res, next) => {
    const user = req.user;
    res.status(200).json({ user });
  }
);

router.put(
  "/update-profile/:id",
  authenticate(["admin", "user"]),
  async (req, res, next) => {
    try {
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
);

// router.delete(
//   "/delete/:id",
//   authenticate(["admin"]),
//   async (req, res, next) => {
//     try {
//       const deletedUser = User.findById(req.params.id);
//       res
//         .status(200)
//         .json({ message: `User with ${deletedUser.id} has been deleted` });
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   }
// );

export default router;
