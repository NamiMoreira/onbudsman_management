import{createTransport, } from  'nodemailer'
import {email} from '../SMTP/createEmail'


    class SendEmail {
        async execute(dataEmail){
            for (let i = 0; i < dataEmail[0].length; i++) {
                const element = dataEmail[0][i];
         
            const mailOptions = new email(dataEmail,element );

            const transporter = createTransport({
            service: "Outlook365",
                host: 'smtp-mail.outlook.com',
              port: 587,
              secure: false,
                auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.PASSWORD_USER,
                },
       
            });
            
            // Send email function
            transporter.sendMail(mailOptions, function(err, ) {
                if (err) {
                    console.log(err);
                    
                  return ({success: false, error: err});
                } else {
                    console.log('success');
                    
                  return ({sucess: true, error: ''});
                }
              });
            }   
        }

    }
    export {SendEmail};