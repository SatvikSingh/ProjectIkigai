const Router = require('router');
const router = Router();
const usercontroller = require('../controller/user');
const auth=require('../middleware/checkauth');

router.post('/createUser', usercontroller.createUser);
router.post('/editprofile',auth.islogin, usercontroller.editprofile);
router.get('/loginUser', usercontroller.sigin);
router.get('/logout', usercontroller.signout);
router.post('/updatepass',auth.islogin, usercontroller.updatepass);
router.post('/resetreq', usercontroller.resetreq);
router.post('/changepass/:id', usercontroller.changepass);





module.exports=router;