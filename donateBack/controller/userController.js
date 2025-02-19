const newUser = require('../models/newUser');
var jwt = require('jsonwebtoken');
const mongoose= require('mongoose');

const createToken=(_id, role,active)=>{
    return  jwt.sign({_id,role,active}, process.env.SECRET, {expiresIn:'300d'})
}




const loginUser=async(req,res)=>{
    const {email,password}=req.body
    
    try{
        const newuser=await newUser.login(email,password)
        const token=createToken(newuser. _id, newuser.role, newuser.active)
        res.status(200).json({email,token,message:"welcome"})

    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}



const signUpUser=async(req,res)=>{
    const {email,password}=req.body
    try {
        const newuser=await newUser.signup(email,password)
        const token=createToken(newuser._id, newuser.role, newuser.active)
        res.status(200).json({email,token})
    
    } catch (error) {
        
        res.status(400).json({error:error.message})
    }

}




const getuser=async(req, res)=>{
    const{id}=req.params
if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:"not found any result"})
}

const getsinglestatus=await newUser.findById(id)

    if(!getsinglestatus){
        return res.status(404).json({result:"no result found"})
    }
    res.status(200).json({ active: getsinglestatus.active })
    
    const updatedActive = getsinglestatus.active;
    
}

const totalUser=async(req,res)=>{
    try {
        const count=await newUser.countDocuments({});
        const countActive=await newUser.countDocuments({active: true});
        // res.json({count})
        res.status(200).json({count,countActive})

    }
    
    catch (error) {
        res.status(400).json({error:error.message})

        
    }

}



const updateUser=async(req,res)=>{
    // const {name,type,weight,pincode,landmark}=req.body
const {id}=req.params
const {active}=req.body

    try{
        const updateuser=await newUser.updateOne({_id:req.params.id},{$set:{active:active}})
       return res.status(200).json(updateuser)
        console.log({pduct})
    }
    catch(error){
         return res.status(404).json({status:error.message})
    }

}


// 
// const updateUserSchema=async(req,res)=>{
    //  const {name,type,weight,pincode,landmark}=req.body
// const {id}=req.params
// 
    // try{
        // const updateUserSchema=await newUser.updateOne({_id:req.params.id},{$set:{Organization_full_name,Organization_register_number,District,pincode,contect_no,website_link}})
    //    return res.status(200).json(updateUserSchema)
        // console.log({pduct})
    // }
    // catch(error){
        //  return res.status(404).json({status:error.message})
    // }
// 
// }
// 
 
module.exports={
    loginUser,
    signUpUser,
    updateUser,
    getuser,
    totalUser
    // updateUserSchema
}