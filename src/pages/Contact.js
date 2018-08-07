import React from 'react';
import styled from 'styled-components';

import ContactForm from './ContactForm';

const ContactDiv = styled.section`
  grid-area: app;
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: 100%;
  grid-template-rows: auto;
  grid-row-gap: 2%;
  align-content: start;
  justify-content: center;
  margin-top: 5%;
`;

const Contact = (props) => {
  return(
    <ContactDiv>
      <h3>Send Me an Email!</h3>
      <ContactForm />
    </ContactDiv>
  )
};

export default Contact;
