const express = require('express')
const router = express.Router()
const counterController = require('../controllers/counter') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, counterController.getCounter)

router.post('/createEntry', counterController.createEntry)

router.delete('/reset', counterController.reset)

// router.delete('/deleteEntry', counterController.deleteEntry)

module.exports = router