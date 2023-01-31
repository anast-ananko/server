const Router = require('express')
const router = new Router()
const tieController = require('../controllers/tieController')

router.post('/', tieController.create)
router.get('/', tieController.getAll)
router.get('/:id', tieController.getOne)
router.delete('/:id', tieController.delete)

module.exports = router