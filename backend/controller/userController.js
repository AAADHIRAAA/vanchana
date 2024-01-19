

const User = require('../model/userModel');

const login = async(req,res)=>{
    try{
            const{email}=req.body;

            const log = User.find({email});
            if(log){
                return res.status(200).json({message:"log is there"});
            }
            else{
                return res.status(200).json({message:"log is not there"});
            }


    }
    catch(error){
        console.error(error);
    }
}

module.exports = {
  login,
};
