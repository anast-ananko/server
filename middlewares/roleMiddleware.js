const jwt = require("jsonwebtoken");

module.exports = (roles) => (req, res, next) => {
  if (req.method === "OPTIONS") {
    next();
  }

  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(403).json({ message: "User not authorized" });
    }
    const { role: userRole } = jwt.verify(token, process.env.SECRET_KEY);
    let hasRole = false;
    if (roles.includes(userRole)) {
      hasRole = true;
    }
    if (!hasRole) {
      return res.status(403).json({ message: "You don't have access" });
    }
    next();
  } catch (e) {
    return res.status(403).json({ message: "User not authorized" });
  }
};
