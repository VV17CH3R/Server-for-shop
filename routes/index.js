const Router = require('express')
const router = new Router()
const seedlingRouter = require('./seedlingRouter')
const userRouter = require('./userRouter')
const countryRouter = require('./countryRouter')
const seedClass = require('./seedClassRouter')


router.use('/user', userRouter)
router.use('/country', countryRouter)
router.use('/seedClass', seedClass)
router.use('/seedling', seedlingRouter)


module.exports = router 