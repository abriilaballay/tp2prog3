// authMiddleware.js
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) return res.sendStatus(401); // No autorizado

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // Prohibido
    req.user = user;
    next();
  });
};

module.exports = authenticateToken;
