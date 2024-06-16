const schoolRouter = require('express').Router();
const schoolController = require('../controllers/schoolController')


schoolRouter.post('/', schoolController.createSchool)
schoolRouter.get('/', schoolController.getschool)
schoolRouter.get('/schoolname/:name', schoolController.getbyschoolname)
schoolRouter.get('/schooltype/:type', schoolController.getbyschooltype)





module.exports = schoolRouter