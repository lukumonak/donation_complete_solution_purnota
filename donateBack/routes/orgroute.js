const express=require ('express')
const { verifiorg,getAllOrgReq } = require('../controller/orgController')
const {sndMailController}=require('../controller/sndMailController')
const router=express.Router()


router.post('/verify',verifiorg)
router.get('/', getAllOrgReq)
router.post('/sndMail', sndMailController)
// router.get('/id', getorgSatus)


module.exports=router