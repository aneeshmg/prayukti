const router = require('express').Router()
const siteHandlers = require('./siteHandlers')


router.get('/', siteHandlers.index)

module.exports = router