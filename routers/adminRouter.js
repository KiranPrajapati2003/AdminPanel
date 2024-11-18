
const { Router } = require("express");
const AdminCtl = require('../conrollers/adminControllers')
const{uploadImage} = require('../middleWares/adminMiddleware')

const adminRouter = Router();

adminRouter.post('/add_admin',uploadImage,AdminCtl.addAdminData)
adminRouter.get('/delete_admin/:id',AdminCtl.deleteAdmin)
adminRouter.post('/edit_admin/:id',uploadImage,AdminCtl.editAdmin)
adminRouter.get('/logout',AdminCtl.logoutPage)
module.exports = adminRouter;


/*
const express = require('express')
const AdminCtl = require('../conrollers/adminControllers')
const uploadImage = require('../middleWares/adminMiddleware')

const adminRouter = express.Router()

adminRouter.post('/add_admin',uploadImage,AdminCtl.addAdminData)
module.exports = adminRouter;

*/