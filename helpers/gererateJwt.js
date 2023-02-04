const jwt = require("jsonwebtoken");

const generateJwt = (id, role) => {
  return jwt.sign({ id, role }, process.env.SECRET_KEY, {
    expiresIn: "12h",
  });
};

module.exports = generateJwt;