const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  let token = req.header("x-auth-token");

  if (!token) {
    const authHeader = req.header("Authorization");
    if (authHeader && authHeader.startsWith("Bearer ")) {
      token = authHeader.split(" ")[1];
    }
  }

  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_TOKEN);
    req.teacher = decoded.teacher;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
