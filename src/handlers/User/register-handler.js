import User from "../../models/User.js";
import bcrypt from "bcrypt";

export const registerHandler = async (req, res) => {
  try {
    const { email, ...otherFields } = req.body;

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    otherFields.password = hashedPassword;

    // Create new user
    const newUser = new User({ email, ...otherFields });
    await newUser.save();

    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
