const Router = require('router');
const router = Router();
const usercontroller = require('../controller/user');
const auth=require('../middleware/checkauth');

router.post('/createUser', usercontroller.createUser);
router.get('/viewprofile',auth.islogin, usercontroller.viewprofile);
router.post('/editprofile',auth.islogin, usercontroller.editprofile);
router.get('/loginUser', usercontroller.sigin);
router.get('/logout', usercontroller.signout);
router.post('/updatepass',auth.islogin, usercontroller.updatepass);
router.post('/resetreq', usercontroller.resetreq);
router.post('/changepass/:id', usercontroller.changepass);
router.get('/viewAllDoctors', usercontroller.allDoctorList);
router.get('/viewOneDoctor/:id', usercontroller.oneDoctorList);







module.exports=router;