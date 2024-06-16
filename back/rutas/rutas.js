const express = require('express')
const router = express.Router()
const controller = require('../controlllers/authControllers')

router.post('/register',controller.register)
router.post('/login',controller.login)

module.exports = router 