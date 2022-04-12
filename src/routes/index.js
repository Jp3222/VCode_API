const {Router} = require('express');
const router = Router();
const fun = require('../controls/usuarios');

router.get('/users',fun.getUsers);
router.post('/users',fun.addUser)

module.exports = router;