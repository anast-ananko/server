const Router = require('express')
const router = new Router()

const authRouter = require('./authRouter')
const userRouter = require('./userRouter')
const orderRouter = require('./orderRouter')

router.use('/auth', authRouter)
router.use('/users', userRouter)
router.use('/orders', orderRouter)


module.exports = router