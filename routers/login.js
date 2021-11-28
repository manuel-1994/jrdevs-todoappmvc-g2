const express = require('express')
const router = express.Router()

router.use('/', (req, res) => {
	res.render('login')
})

module.exports = router
