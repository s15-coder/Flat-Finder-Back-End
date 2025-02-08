const { getUserById } = require("../utils/get-user-by-id.js");
const jwt = require("jsonwebtoken");
module.exports.checkIsAdmin = async (req, res, next) => {
  console.log(req.headers.token);
  const token = req.headers.token;
  if (!token) {
    return res.status(403).json({ message: "Invalid token" });
  }
  let userId;

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    userId = payload.id;
  } catch (error) {
    return res.status(403).json({ message: "Invalid permissions" });
  }

  const user = await getUserById(userId); // Assume getUserById is a function that fetches the user by ID

  if (user && user.isAdmin) {
    next();
  } else {
    res.status(403).json({ message: "Invalid permissions" });
  }
};
