import User from "../models/User.js";
import jwt from "jsonwebtoken";

const authenticate = (role = []) => {
  return async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
      return res.status(403).json({ message: "Please Login First" });
    }
    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decode.id);
      if (!role.includes(req.user.role)) {
        return res.status(403).json({ message: "acces denied" });
      }
      next();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
};

export default authenticate;
