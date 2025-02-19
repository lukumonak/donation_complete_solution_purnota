//organization verify  and save in database

const newOrganization = require('../models/newOrganization')
const mongoose = require('mongoose')

verifiorg = async (req, res) => {
    const {auto_id,  Organization_full_name, Organization_register_number, District, pincode, contect_no, website_link } = req.body
        
    try {
        
        
        
        
        if(!Organization_full_name||!Organization_full_name||!District||!pincode||!contect_no){
            console.log('type at conte=roller',typeof contect_no)
            throw Error("please fill all required")
        }
        // await newOrganization.orgsign(contect_no,pincode)
        if (pincode.length < 6) {
            throw new Error("invalid pincode length");
        }
        if (contect_no.length < 10) {
            throw new Error("invalid contact number length");
        }

       

        const exist = await newOrganization.findOne({ contect_no:contect_no })
        const exist1 = await newOrganization.findOne({ Organization_register_number:Organization_register_number })


            if(exist){
                throw Error("contect number already exist")
            }

            if(exist1){
                throw Error("organization Register number already exist")
            }


        const uploadOrg = await newOrganization.create({auto_id, Organization_full_name, Organization_register_number, District, pincode, contect_no, website_link })
        res.status(200).json(uploadOrg)
        console.log(Organization_full_name, Organization_register_number, District, pincode, contect_no, website_link)
    }
    catch (error) {
        res.status(400).json({ error: error.message })
        // res.status(400).json({ error: 'please fill the values correctly' })
    }
}


//geting the value in admin panel to get the value
getAllOrgReq=async(req,res)=>{
    const AllorgReq=await newOrganization.find({})
    res.status(200).json(AllorgReq)

}

module.exports = {
    verifiorg,
    getAllOrgReq
}