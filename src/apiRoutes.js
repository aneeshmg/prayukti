const router = require('express').Router()
const apiHandlers = require('./apiHandlers')


router.get('/', apiHandlers.index)

router.get('/line', apiHandlers.getLine)

module.exports = router