import axios from 'axios';

const sendEmail = function(name, from, subject, message) {
    return axios.post(`${process.env.HOST}/api/message`, { name, from, subject, message })
            .then(response => {
                return response.data;
            })
            .catch(err => console.log(err));
}

const MailgunService = {
    sendEmail: sendEmail
}

export default MailgunService;