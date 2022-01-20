const Router = require('router');
const router = Router();
const usercontroller = require('../controller/user');

router.post('/createUser', usercontroller.createUser);
router.get('/loginUser', usercontroller.sigin);
router.get('/logout', usercontroller.signout);


module.exports=router;