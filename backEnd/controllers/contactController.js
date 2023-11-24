const { sendEmail } = require('../services/contactService');

const contactController = {
  sendContactEmail: async (req, res) => {
    const { name, email, message } = req.body;

    try {
      await sendEmail( email ,message);
      res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, message: 'Failed to send email' });
    }
  },
};

module.exports = contactController;
