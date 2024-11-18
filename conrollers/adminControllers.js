const admin = require('../models/adminSchema')
const fs = require('fs')

module.exports.addAdminData = async (req, res) => {
    try {
        if (req.file) {
            req.body.image = req.file.path
        }
        req.body.name = req.body.fname + ' ' + req.body.lname
        await admin.create(req.body)
        return res.redirect('back')
    } catch (error) {
        console.log(error);
        return res.redirect('back')
    }
}

module.exports.deleteAdmin = async (req, res) => {
    let { id } = req.params;
    try {
        let deleteData = await admin.findByIdAndDelete(id)
        fs.unlinkSync(deleteData.image)
        return res.redirect('/view_admin')
    } catch (error) {
        console.log(error);
        return res.redirect('/view_admin')
    }
}

module.exports.editAdmin = async (req, res) => {
try {
    let { id } = req.params;
    if(req.file){
        req.body.image = req.file.path
        fs.unlinkSync(req.body.oldImage)
    }
    req.body.name = req.body.fname + ' ' + req.body.lname
    
    let adminData = await admin.findByIdAndUpdate(id,req.body)
    return res.redirect('/view_admin')
} catch (error) {
    console.log(error);
    return res.redirect('/view_admin')
}
}

module.exports.logoutPage = (req,res)=>{
    res.clearCookie('adminId');
    return res.redirect('/login');
}