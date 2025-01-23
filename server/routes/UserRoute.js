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
    res.status(500).json({ error: error.message });
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    passport.authenticate("local", (err, user) => {
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

router.get("/users", authenticate(["admin"]), async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put(
  "/update-profile",
  authenticate(["admin", "user"]),
  async (req, res, next) => {
    try {
      const userId = req.user._id;
      const { name, username, phone } = req.body;
      const updatedUser = await User.findByIdAndUpdate(userId, req.body, {
        new: true,
        runValidators: true,
      });
      res.status(200).json({
        message: `User With id : ${updatedUser.id} has been updated`,
        updatedUser,
      });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
);

router.delete(
  "/delete/:id",
  authenticate(["admin"]),
  async (req, res, next) => {
    try {
      const deletedUserId = req.params.id;
      const deletedUser = await User.findById(deletedUserId);
      console.log(deletedUser);
      if (!deletedUser) {
        res.status(404).json({ message: "User Not Found" });
      } else {
        await User.deleteOne();
        res
          .status(200)
          .json({ message: `User with id ${deletedUserId} has been deleted` });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

export default router;
