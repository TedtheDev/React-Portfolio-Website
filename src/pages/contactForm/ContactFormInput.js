import React, { Component } from 'react';
import styled from 'styled-components';

const FormInputWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        margin-bottom: .2rem;
    }
`;

const FormInput = styled.input`
    color: ${props => props.theme.first.white};
    font-size: 1.2rem;
    display: block;
    width: 90%;
    padding: .5rem;
    background: none;
    border: none;
    border-bottom: .3rem solid transparent;
    transition: all .1s;

    &:focus {
        outline: none;
        border-bottom: .3rem solid ${props => props.theme.first.white};
    }

    &:focus:invalid {
        border-bottom: .3rem solid red;
    }

    &::placeholder {
        color: ${props => props.theme.first.white};
    }
`;

const FormLabel = styled.label`
    display: block;
    transition: all .1s ease-in;
    transform: translateY(-4rem);

    ${FormInput}:placeholder-shown + & {
        opacity: 0;
        visibility: hidden;
        transform: translateY(-1rem);
    }
`;

class ContactFormInput extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <FormInputWrapper>
                <FormInput autocomplete="off" type={this.props.type} onChange={this.props.onChange} id={this.props.label} value={this.props.value} placeholder={this.props.placeholder} />
                <FormLabel htmlFor={this.props.label}>{this.props.label.substring(0,1).toUpperCase() + this.props.label.substring(1)}: </FormLabel>
            </FormInputWrapper>
        )
    }
}

export default ContactFormInput;