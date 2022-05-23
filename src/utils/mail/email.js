import nodemailer from "nodemailer";
import nodemailerSendgrid from "nodemailer-sendgrid";
import dotenv from "dotenv";
import style from "./style"
dotenv.config();
const host= `${process.env.APP_URL}`

const transport = nodemailer.createTransport(
  nodemailerSendgrid({
    apiKey: process.env.SENDGRID_API_KEY
  })
);

class Mailer{

    constructor(mailObject){
        const{to,header,messageHeader,messageBody,Button,optionLink,browserMessage}=mailObject;
        this.to=to;
        this.header=header||'Welcome to Livestock Bank';
        this.messageHeader=messageHeader;
        this.messageBody=messageBody;
        this.browserMessage=browserMessage;
        this.Button=Button ;
        this.optionLink=optionLink;

    }
    async sendMail(){
        const html=` <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <style>
              ${style}
            </style>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
          </head>
          <body>
          <div class="container">
          <div class="content">
              <div style="padding:30px 30px 29px;margin: 0px auto;">
                <div style="position: relative; top: -30px; margin-left:10px;">
                <img src="https://res.cloudinary.com/fimboo/image/upload/c_scale,w_200/v1639380633/PMP/livestock-bank_dexvg0.png" />
                </div>
                <p><span class="welcome">${this.header}</span></p>
                <ul>
                  <li>${this.messageHeader}</li>
                
                  <li class="message">${this.messageBody}</li>
                </ul>
                ${this.Button ? this.buttonTemp : ''}
                <ol>
                  <li class="copy">${this.browserMessage}</li>
                  <li><a href="${this.optionLink}">${this.optionLink}</a></li>
                </ol>
                <div class="regard"><ul>
                  <li><strong>Regards,</strong></li><br>
                  <li>Livestock Team</li>
                </ul>
              </div>
              </div>
          </div>
          <br/>
         
        <div align="center" class="social-media">
          <ol>
          <li><a href="#" id="facebook"><img src="https://res.cloudinary.com/fimboo/image/upload/v1611937655/facebook_logo_lhpayw.png"></a></li>
          <li><a href="#" id="twitter"><img src="https://res.cloudinary.com/fimboo/image/upload/v1611937655/twitter_logo_ajduex.png"></a></li>
          <li><a href="#" id="linkedin"><img src="https://res.cloudinary.com/fimboo/image/upload/v1611937655/linkedin_logo_nnjdhn.png"></a></li>
           <li><a href="#" id="google"><img src="https://res.cloudinary.com/fimboo/image/upload/v1611937655/google_logo_givesy.png"></a></li>
          <li><a href="#" id="instagram"><img src="https://res.cloudinary.com/fimboo/image/upload/v1611937652/instagram_logo_wnxqz9.png"></a></li>
          <li><a href="#" id="youtube"><img src="https://res.cloudinary.com/fimboo/image/upload/v1611937652/youtube_logo_cka63r.png"></a></li>
          </ol>
        </div> <br>
        <center>  
            <div align="center" class="footer_text">
          <p>You are receiving this email because it may contain important information to you. <br> If you want to stop getting emails from Fimboo click the link below</p>
          <p><b><a href="${host}/api/v1/user/subscribe">Unsubscribe</a>|<a href="${host}/api/v1/user/subscribe">subscribe</a></b></p>
        </div>
        </center>
      </div>
          </body>
        </html> `;
        try {

            const transporter = nodemailer.createTransport(
                nodemailerSendgrid({
                  apiKey: process.env.SENDGRID_API_KEY
                })
              );
      
            const messageObj = {
              from: `Fimboo application ${process.env.EMAIL_SENDER}`,
              to: this.to,
              subject: this.header,
              html
            };
      
            await transporter.sendMail(messageObj);
            transporter.close();
          } catch (error) {
            throw new Error(error);
          }
        }
      
        /**
         * Sets the email Header
         * @param {String} header - The header of the mail
         * @returns {null} - dosen't return an object
         */
        setHeader(header) {
          this.header = header;
        }
      
        /**
         * Intializes the button
         * @param {string} button.text - The text in the button
         * @param {string} button.link - The url of the mail
         * @returns {null} - dosen't return an object
         */
        InitButton(button) {
          const { text, link } = button;
          this.buttonTemp = `
            <div style="margin: 30px;">
              <a class='link-button' href = '${link}' style="color: white">${text}</a>
            </div>
          `;
        }
      }
      
      export default Mailer;