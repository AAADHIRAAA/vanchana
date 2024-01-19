
const User = require('../model/userModel');

const loginInfo = async(req,res)=>{
    try{
            const{email}=req.body;

            const log = User.find({email});
            if(log){
                return res.status(200).json({message:"exists"});
            }
            else{
                return res.status(200).json({message:"not exists"});
            }

    }
    catch(error){
        console.error(error);
    }
}

const login = async(req,res)=>{
    try{
console.log("backend");
            const{
                email,
                name,
                gender,
                age,
                ph_no,
                location
            }=req.body;
console.log(req.body);
            await User.create({email, name, gender, age, ph_no, location});
            return res.status(200).json({message:"created successfully"});
    }
    catch(error){
        console.error(error);
    }
}

module.exports = {
  loginInfo,
  login
};
