const Router = require('express')
const router = new Router()
const userController = require('../controllers/UserController')

router.post('/', userController.create)
router.get('/', userController.getAll)
router.get('/:id', userController.getOne)
router.delete('/:id', userController.delete)

module.exports = router