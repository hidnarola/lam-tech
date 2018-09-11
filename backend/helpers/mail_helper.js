var nodemailer = require('nodemailer');
var EmailTemplate = require('email-templates').EmailTemplate;
var mail_helper = {};
var config = require("./../config");


var transporter = nodemailer.createTransport({
    service: 'gmail',
    tls: { rejectUnauthorized: false },
    auth: {
        user: "contact@ndever.nyc",
        pass: "Ndever0313!"
    }
});

mail_helper.send = async (template_name, options, data) => {
    var template_sender = transporter.templateSender(new EmailTemplate('emails/' + template_name), {
        from: "support@music.com"
    });

    return template_sender({
        to: options.to,
        subject: options.subject,
    }, data).then(function (info) {
        return { "status": 1, "message": info };
    }).catch(function (err) {
        return { "status": 0, "error": err };
    });
};

module.exports = mail_helper;