const db = require('../models/db-connection')
const bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken');


exports.createUser = async (req, res) => {
    var f_name = req.body.f_name;
    var l_name = req.body.l_name;
    var email = req.body.email;
    var phone = req.body.phone;
    var gender = req.body.gender;
    var occupation = req.body.occupation;
    var password = req.body.password;
    var confirmPass = req.body.confirmPass;
    var address = req.body.address;
    var role = 'USER';
    var dob=req.body.DOB;
    if (password !== confirmPass) {
        return res.status(401).send("Password doesn't match");
    }
    var hash=await bcrypt.hashSync(password, 10);
    password=hash;
    var sql = `INSERT INTO ${process.env.database}.user_data (firstname, lastname, email, occupation, gender, phone, password, address, role,dob) VALUES ("${f_name}", "${l_name}", "${email}", "${occupation}", "${gender}", "${phone}", "${password}", "${address}", "${role}", "${dob}")`;

    db.query(sql, function(err, result) {
        if (err) {
           return res.status(401).send(err.message);
        }
        var token = jwt.sign({id:email}, process.env.Secret_key);
        res.cookie('token', token, { 
            httpOnly: true,
            expiresIn: 7*24*60*60*1000 // 7 DAYS
        });
        return res.status(200).send("User created successfully");
      });
}

exports.sigin = async (req, res) => {
    var email = req.body.email;
    var password = req.body.password;
    var sql = `select * from ${process.env.database}.user_data where email = "${email}" `;
    db.query(sql, async function (err, result) {
        if(err){
            return res.status(401).send(err.message);
        }
        if(result.length===0){
            return res.status(401).send("Invalid Username/Password");
        }else{
            if(await bcrypt.compare(req.body.password,result[0].password)){
                var token = jwt.sign({id:email}, process.env.Secret_key);
                res.cookie('token', token, { 
                    httpOnly: true,
                    expiresIn: 7*24*60*60*1000 // 7 DAYS
                });
                res.status(200).send("Logged In Succesfully!!");
            }else{
                return res.status(401).send("Invalid Username/Password");
            }
        }
    });
}

exports.signout = async (req, res) => {
    res.clearCookie("token");
    return res.status(200).send({
        success:true,
        messgae:"Succesfully Logged Out"
    });
}

