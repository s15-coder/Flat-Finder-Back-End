const jwt = require("jsonwebtoken");

const isValidToken = async (req, res, next) => {
  const token = req.headers.token;
  if (!token) {
    return res.status(403).json({ message: "Invalid token" });
  }
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.body.authenticatedUserId = payload.id;
    req.body.isAdmin = payload.isAdmin;
    next();
  } catch (error) {
    console.log("Unauthorized access:", error);
    return res.status(403).json({ message: "Unauthorized access" });
  }
};

module.exports = { isValidToken };
