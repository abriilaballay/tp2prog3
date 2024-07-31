const express = require('express');
const router = express.Router();
const controller = require('../controlllers/authControllers');
const authenticateToken = require("../authMiddleware")

router.post('/register', controller.register);
router.post('/login', controller.login);

router.get('/users', authenticateToken, controller.getUsers); // Protegida
router.get('/users/:id', authenticateToken, controller.getUserById); // Protegida
router.delete('/users/:id', authenticateToken, controller.deleteUser); // Protegida
router.post('/users/:id', authenticateToken, controller.updateUser); // Protegida

router.post('/logout', (req, res) => {
  res.cookie('jwt', '', { maxAge: 1 });
  res.status(200).json({ message: 'Cierre de sesión exitoso' });
});

module.exports = router;
