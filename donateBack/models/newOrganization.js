const mongoose=require('mongoose')
var validator = require('validator');



const newOrganization=mongoose.Schema({

  auto_id:{
    type:String,
   default:String
  },
    Organization_full_name:{
        type:String,
        require:true,

    },
    Organization_register_number:{
        type:String,
        require:true,
        // unique:true
    },
    District:{
        type:String,
        require:true,
    },
    pincode: {
        type: String,
        require: true,
      },

      contect_no:{
        type: Number,
        // unique:true,
        require: true
      },
      website_link:{
        type:String
      }

        // active: {
          // type: Boolean,
          // default: false
      // }


})



module.exports=mongoose.model('organizationSchema',newOrganization)