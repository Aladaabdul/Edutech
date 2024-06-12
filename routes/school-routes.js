const schoolRouter = require('express').Router();
const schoolController = require('../controllers/schoolController')


schoolRouter.post('/', schoolController.createSchool)
schoolRouter.get('/', schoolController.getschool)





module.exports = schoolRouter