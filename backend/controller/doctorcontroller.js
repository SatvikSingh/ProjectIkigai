const db = require('../models/db-connection')
const bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken');
const nodemailer=require('../utlis/nodemailer');

exports.createUser = async (req, res) => {
    var f_name = req.body.f_name;
    var l_name = req.body.l_name;
    var email = req.body.email;
    var phone = req.body.phone;
    var gender = req.body.gender;
    var description = req.body.description;
    var password = req.body.password;
    var confirmPass = req.body.confirmPass;
    var address = req.body.address;
    var dob=req.body.DOB;
    var price=req.body.price;
    if (password !== confirmPass) {
        return res.status(401).send("Password doesn't match");
    }
    var hash=await bcrypt.hashSync(password, 10);
    password=hash;
    var sql = `INSERT INTO ${process.env.database}.doctor_data (firstname, lastname, email, description, gender, phone, password, address,dob,price) VALUES ("${f_name}", "${l_name}", "${email}", "${description}", "${gender}", "${phone}", "${password}", "${address}",  "${dob}" ,"${price}")`;
    db.query(sql, async function(err, result) {
        if (err) {
           return res.status(401).send(err.message);
        }
        var token = jwt.sign({id:email}, process.env.Secret_key);
        res.cookie('token', token, { 
            httpOnly: true,
            expiresIn: 7*24*60*60*1000 // 7 DAYS
        });
        return res.status(200).json({
            success:true,
            message:"Doctor created successfully",
        });
    });
}

exports.sigin = async (req, res) => {
    var email = req.body.email;
    var password = req.body.password;
    var sql = `select * from ${process.env.database}.doctor_data where email = "${email}" `;
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

exports.editprofile = async (req, res) => {
    var email=req.Doctor.email
    var f_name = req.body.f_name;
    var l_name = req.body.l_name;
    var phone = req.body.phone;
    var description = req.body.description;
    var price=req.body.price;
    var address = req.body.address;
    var sql = `update ${process.env.database}.doctor_data set firstName ='${f_name}', lastName = '${l_name}' , phone='${phone}',  description='${description}',  address='${address}', price='${price}' where email='${email}'`;
    db.query(sql, function(err, result) {
        if (err) {
           return res.status(401).json({
                success:false,
                messgae:err.message
            });
        }
        return res.status(200).send("Doctor Updated successfully");
    });
}

exports.updatepass = async (req, res) => {
    var email=req.Doctor.email
    var oldpassword=req.body.oldpassword;
    var password = req.body.password;
    var confirmPass = req.body.confirmPass;
    if(await bcrypt.compare(oldpassword,req.Doctor.password)){
        if (password !== confirmPass) {
            return res.status(401).send("Password doesn't match");
        }
        var hash=await bcrypt.hashSync(password, 10);
        password=hash;
        var sql = `update ${process.env.database}.doctor_data set password ='${password}' where email='${email}'`;
        db.query(sql, function(err, result) {
            if (err) {
               return res.status(401).json({
                    success:false,
                    messgae:err.message
                });
            }
            return res.status(200).send("Password Updated successfully");
        });
    }else{
        return res.status(401).json({
            success:false,
            message:"Old Password doesnt match"
        });
    }
}



// Reset Password

exports.resetreq = async (req, res) => {
    try{
        var email=req.body.email
        var token = jwt.sign({id:email}, process.env.Secret_key);
        var expiry=Date.now()+1*60*60*1000;  // 1 hour
        var sql = `update ${process.env.database}.doctor_data set resetToken ='${token}' ,tokenexpiration='${expiry}' where email='${email}'`;
        db.query(sql, async function(err, result) {
            const resetPasswordUrl = `${req.protocol}://${req.get("host")}/doctor/changepass/${token}`;
            const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`;
            await nodemailer.main({
                email,
                subject:"Email for resetting Password",
                message:message
            })
            return res.status(200).send("Token Sent successfully");
        });
    }catch(error){
        return res.status(401).json({
            success:false,
            messgae:err.message
        });
    }
}

exports.changepass = async (req, res) => {
    try{
        var sql = `select * from ${process.env.database}.doctor_data where resetToken='${req.params.id}'`;
        db.query(sql, async function(err, result) {
            if(result.length!==0){
                var num=Date.now();
                if(result[0].tokenexpiration>num){
                    var password = req.body.password;
                    var confirmPass = req.body.confirmPass;
                    if (password !== confirmPass) {
                        return res.status(401).send("Password doesn't match");
                    }
                    var hash=await bcrypt.hashSync(password, 10);
                    password=hash;
                    var sql1 = `update ${process.env.database}.doctor_data set password ='${password}', resetToken =null  where resetToken='${req.params.id}'`;
                    db.query(sql1, function(err, result) {
                        return res.status(200).send("Password Updated successfully");
                    });
                }else{
                    return res.status(401).json({
                        success:false,
                        messgae:"Token Expired"
                    });
                }
            }else{
                return res.status(401).json({
                    success:false,
                    messgae:"Either Invalid Reset Token or Token Expired"
                });
            }
        });
    }catch(error){
        return res.status(401).json({
            success:false,
            messgae:err.message
        });
    }
}

// View Profile

exports.viewprofile = async (req, res) => {
    try {
        var email=req.Doctor.email
        var sql = `select * from ${process.env.database}.doctor_data where email='${email}'`;
        db.query(sql, function(err, result) {
            return res.status(200).json({
                success:true,
                messgae:result
            });
        });
    }
    catch(err){
        return res.status(401).json({
            success:false,
            messgae:err.message
        });
    }
}

// Doctor Dashboard

// Slot accepting/rejecting

// Chat Feature

// Video Calling

// Payment Configuration
