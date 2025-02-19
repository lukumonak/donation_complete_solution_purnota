const nodemailer = require("nodemailer");


sndMailController=async(req,res)=>{
   
  const verificationToken= Math.floor(Math.random() * 900) + 100;  //random verification token

  const {pickPersonName,  pickPersonid, pickPersonEmail, pickPersonContectno,ownerEmail } =await req.body

console.log('details',pickPersonName,  pickPersonid, pickPersonEmail, pickPersonContectno,ownerEmail)

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
      user: "lukuassaam@gmail.com",
      pass: "urglsrvjjxwkefis",
    },
  });
  

    // send mail with defined transport object
    const mailOption ={
      from: 'lukuassaam@gmail.com', // sender 
      to: `${pickPersonEmail} ,${ownerEmail}`, // receivers
      subject: "Ready to Pickup", // Subject line
     
      html: `<b> Hello dear </b> <br> We're excited to let you know that your pickup request is scheduled for today. To ensure a smooth process, we'll be sending over a special 3-digit verification code. When our pickup person arrives, you need to confirm the verification code match or not if match then procced otherwise decline🎉


      Here are some details about our pickup person:<br>
      <b>Verification Token:</b> ${verificationToken}<br>
      <b>Name:</b> ${pickPersonName}<br>
      <b>ID:</b> ${pickPersonid}<br>
      <b>Contact Number:</b> ${pickPersonContectno}<br><br>


      Feel free to verify their identity by checking their identification card  and matching the ID number. Your package is in good hands! ✨`, 
    };


    try {
      const result=await  transporter.sendMail(mailOption)
      return res.status(200).json({'success':'true'})
      console.log('email send successfully')
    } catch (error) {
        return res.status(404).json({status:error.message})
        
    }
  
  }




module.exports={sndMailController};