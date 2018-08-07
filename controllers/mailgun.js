var api_key = process.env.MAILGUN_API_KEY || '';
var domain = process.env.MAILGUN_DOMAIN || '';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
 
const mailgunController = (req,res) => {
    const { name, from } = req.body;
    let { message, subject } = req.body;

    subject = `From Personal Website - ${subject}`;
    message = `From ${name},\n\n${message}`;

    var data = {
        from: from,
        to: 'tylerjedmunds@gmail.com',
        subject: subject,
        text: message
    };
      
    mailgun.messages().send(data, function (error, body) {
        if(error) {
            res.json({ err: error });
        }
        res.json({ message: 'message sent' });
    });
}

module.exports = mailgunController;