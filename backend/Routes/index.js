const Router = require('router');
const router = Router();
const homecontroller = require('../controller/home');

router.get('/', homecontroller.home);

router.use('/user', require('./userRoute'));


module.exports=router;