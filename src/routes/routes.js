const {Router} = require('express');
const router = Router();
const fun = require('../controls/usuarios');


router.get('/users',fun.getUsers);
router.get('/usuarios',fun.get);
router.post('/users',fun.create);
router.delete('/users/:id',fun.remove);
router.put('/users/:id',fun.update)

module.exports = router;