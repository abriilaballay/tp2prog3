const express = require('express')
const router = express.Router()
const controller = require('../controlllers/authControllers')

router.post('/register',controller.register)
router.post('/login',controller.login)

router.get('/users', controller.getUsers);
router.get('/users/:id', controller.getUserById);
router.delete('/users/:id', controller.deleteUser);
router.post('/users/:id', controller.updateUser);

router.post('/logout', (req, res )=>{
    res.cookie('jwt', '', { maxAge: 1 });
    res.status(200).json({ message: 'Cierre de sesión exitoso' });
})

module.exports = router 