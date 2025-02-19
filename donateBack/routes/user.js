const express= require ('express')
const {loginUser,signUpUser,totalUser}=require('../controller/userController')
const { getuser,updateUser,updateUserSchema } = require('../controller/userController')



const router=express.Router()

//login
router.post('/login',loginUser)


//signUp
router.post('/signUp',signUpUser)


router.get('/getuser/:id',getuser)


router.get('/userCount',totalUser)


router.patch('/permission/:id',updateUser) //permission


//router.patch('/edit/:id',updateUserSchema) //edit




module.exports=router