var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: 'sonam43jha@gmail.com',
        pass: '@n0nymou$2484'
    }
});

var mailOptions = {
    from: 'sonam43jha@gmail.com',
    to: 'singh.sagar19999@gmail.com',
    subject: 'Sending email using Node js',
    text: 'Heyy, How are uh??'
}

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent' + info.response);
    }
})