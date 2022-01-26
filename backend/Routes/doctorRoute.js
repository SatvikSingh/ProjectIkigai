const Router = require('router');
const router = Router();
const doctorcontroller = require('../controller/doctorcontroller');
const auth=require('../middleware/checkauth');

router.post('/createUser', doctorcontroller.createUser);
router.get('/loginUser', doctorcontroller.sigin);
router.get('/logout', doctorcontroller.signout);
router.post('/editprofile',auth.islogindoctor, doctorcontroller.editprofile);
router.post('/updatepass',auth.islogindoctor, doctorcontroller.updatepass);
router.post('/resetreq', doctorcontroller.resetreq);
router.post('/changepass/:id', doctorcontroller.changepass);


module.exports=router;