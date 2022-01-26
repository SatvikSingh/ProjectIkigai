const db = require('../models/db-connection')
const jwt=require('jsonwebtoken');
exports.islogin=async (req,res,next)=>{
    const { token } = req.cookies;
    if(token===undefined){
        return res.status(401).json({
            success:false,
            messgae:"Login First"
        });
    }
    else{
        var decoded = jwt.verify(token, process.env.Secret_key);
        var sql = `select * from ${process.env.database}.user_data where email='${decoded.id}'`;
        db.query(sql, async function(err, result) {
            if(result){
                req.User=result[0];
                next();
            }else{
                return res.status(401).json({
                    success:false,
                    messgae:"Login First!!"
                });
            }
        });
    }
}

exports.islogindoctor=async (req,res,next)=>{
    const { token } = req.cookies;
    if(token===undefined){
        return res.status(401).json({
            success:false,
            messgae:"Login First"
        });
    }
    else{
        var decoded = jwt.verify(token, process.env.Secret_key);
        var sql = `select * from ${process.env.database}.doctor_data where email='${decoded.id}'`;
        db.query(sql, async function(err, result) {
            if(result){
                req.Doctor=result[0];
                next();
            }else{
                return res.status(401).json({
                    success:false,
                    messgae:"Login First!!"
                });
            }
        });
    }
}