const User = require("../models/User");
const bcrypt = require("bcrypt");
const auth = require("../auth");

module.exports.registerUser = (req, res) => {
    const hashedPW = bcrypt.hashSync(req.body.password,10);
    let newUser = new User({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        password:hashedPW,
        mobileNo:req.body.mobileNo
    });
    newUser.save().then(user => res.send(user)).catch(err => res.send(err));
};

module.exports.loginUser = (req,res) => {
    User.findOne({email:req.body.email}).then(foundUser =>{
        if(foundUser === null){
            return res.send("No User Found.");
        } else {
            const isPasswordCorrect = bcrypt.compareSync(req.body.password,foundUser.password);
            if(isPasswordCorrect){
                return res.send({accessToken:auth.createAccessToken(foundUser)});
            }else{
                return res.send("Incorrect password.");
            }
        }
    }).catch(err => res.send(err));
}

module.exports.setUserAsAdmin = (req,res) =>{
    let updates = {
        isAdmin:req.body.isAdmin
    }
    User.findByIdAndUpdate(req.user.id,updates,{new:true}).then(result=>res.send(result)).catch(err => res.send(err));
}



