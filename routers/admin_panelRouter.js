const { Router } = require("express");
const AdminPCtl = require('../conrollers/admin_panelController')
const { adminAuth } = require('../middleWares/adminAuth');
const ApRouter = Router();

ApRouter.get('/',AdminPCtl.indexPage)
ApRouter.get('/add_admin',AdminPCtl.addAdminPage)
ApRouter.get('/view_admin',AdminPCtl.viewAdminPage)
ApRouter.get('/edit_admin/:id',AdminPCtl.editAdminPage)
ApRouter.get('/login',AdminPCtl.loginPage)
ApRouter.get('/signup',AdminPCtl.signupPage)

ApRouter.post('/login',AdminPCtl.login)

module.exports = ApRouter;


/*
const express = require('express')
const AdminPCtl = require('../conrollers/admin_panelController')

const ApRouter = express.Router()

ApRouter.get('/',AdminPCtl.indexPage)
ApRouter.get('/add_admin',AdminPCtl.addAdminPage)
ApRouter.get('/view_admin',AdminPCtl.viewAdminPage)
module.exports = ApRouter;

*/