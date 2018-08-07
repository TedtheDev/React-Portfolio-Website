import React, { Component } from 'react';
import styled from 'styled-components';

import ContactFormInput from './contactForm/ContactFormInput';

import MailgunService from '../utils/mailgun-service';

const StyledContactForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Textarea = styled.textarea`
    display: block;
    border: .1rem solid ${props => props.theme.first.white};
    color: ${props => props.theme.first.white};
    background: none;
    font-size: 1.2rem;
    padding: .4rem;
    margin-bottom: 1rem;
`;

const FormButton = styled.button`
    width: 30%;
    min-width: 160px;
    background: transparent;
    border: 2px solid ${props => props.theme.first.white};
    padding: 1rem;
    cursor: pointer;
    outline: none;
    font-size: 1.1rem;
    color: ${props => props.theme.first.white};
`;

const ErrorDiv = styled.div`
    color: red;
`;

/**
 * TODO: map state objects to a for loop to pass to ContactFormInput
 */
class ContactForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            error: '',
            sent: false,
            mailgunError: '',
            sendingMessage: false
        };
    }

    onChangeName = (event) => {
        this.setState({ name: event.target.value });
    }

    onChangeEmail = (event) => {
        this.setState({ email: event.target.value });
    }

    onChangeSubject = (event) => {
        this.setState({ subject: event.target.value });
    }
    
    onChangeMessage = (event) => {
        this.setState({ message: event.target.value });
    }

    onSubmitSendMessage = (event) => {
        event.preventDefault();
        const { name, email, subject, message } = this.state;
        if(name !== '' && email !== '' && subject !== '' && message !== '') {
            // send message
            this.setState((prevState) => {
                return { sendingMessage: !prevState.sendingMessage };
            });

            MailgunService.sendEmail(name, email, subject, message)
                .then(response => {
                    if(response.message === 'message sent') {
                        this.setState((prevState) => {
                            return { sent: !prevState.sent, sendingMessage: !prevState.sendingMessage }
                        });
                    } else {
                        this.setState((prevState) => {
                            return { mailgunError: response, sendingMessage: !prevState.sendingMessage }
                        });
                    }
                })
                .catch(err => {
                    this.setState({mailgunError: 'Message was not sent. Please retry.'});
                });
            
        } else {
            this.setState({error: 'Missing Fields'})
        }
    }

    render() {

        if(this.state.sendingMessage) {
            return <div>Sending...</div>
        }

        if(this.state.sent) {
            return <div>Message Sent!</div>
        }
        
        return (
            <StyledContactForm onSubmit={this.onSubmitSendMessage}>
                <ContactFormInput
                    type='text'
                    value={this.state.name}
                    label='name'
                    placeholder='Name'
                    onChange={this.onChangeName}
                />
                <ContactFormInput
                    type='email'
                    value={this.state.email}
                    label='email'
                    placeholder='Email'
                    onChange={this.onChangeEmail}
                />
                <ContactFormInput
                    type='text'
                    value={this.state.subject}
                    label='subject'
                    placeholder='Subject'
                    onChange={this.onChangeSubject}
                />
                <Textarea
                    placeholder='Message'
                    rows="3" cols="33"
                    onChange={this.onChangeMessage}
                    value={this.state.message} 
                />
                <FormButton type="submit">Send Message</FormButton>
                {this.state.mailgunError !== '' ? <ErrorDiv>Mailgun Error</ErrorDiv> : null}
                {this.state.error !== '' ? <ErrorDiv>Missing Fields</ErrorDiv> : null}
            </StyledContactForm>
        )
    }
}

export default ContactForm;