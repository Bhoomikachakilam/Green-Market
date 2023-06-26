import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const welcome = (req, res) => {
  res.send("Welcome");
};

const register = async (req, res, next) => {
  try {
    const { name, email, password, role, mobile, village } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.json({ message: 'An account with this email already exists' });
      return;
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
      mobile,
      village,
    });
    res.json({
      message: 'successfully registered'
    });
  } catch (err) {
    console.log("error on register endpoint ", err);
    next(err);
  }
};
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404);
      throw new Error("User not found");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(401);
      throw new Error("Invalid credentials");
    }
    const tokenPayload = {
      userId: user._id,
      role: user.role, // Include the role in the token payload
    };
    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({
      token,
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role, 
    });
  } catch (err) {
    console.log("error on login endpoint ", err);
    next(err);
  }
};

export { register, login ,welcome};
