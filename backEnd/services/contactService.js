const nodemailer = require("nodemailer");

const sendEmail = async (email,message) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "hotmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      // Transport Layer Security (TLS)
      tls: {
        /* By default, Node.js (which Nodemailer is built upon) verifies the server's (Backend SErver) TLS certificate when making a 
          secure connection.
        Setting rejectUnauthorized to false disables this default behavior and allows the connection to be established even if the server's 
        TLS certificate is self-signed or invalid.*/
        rejectUnauthorized: false,
      },
    });

    // Options for sending Email
    const options = {
      from:email ,
      to: process.env.EMAIL_USER,
      subject:"Renseignements CyberEye",
      text:message,
    };

    // Send Email
    const info = await transporter.sendMail(options);
    console.log("Email sent successfully:", info);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error; // rethrow the error for the calling code to handle
  }
};

module.exports = { sendEmail };
