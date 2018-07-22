import React from 'react';
import styled from 'styled-components';

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

const ContactItemDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto;
  justify-items: center;
  align-items: center;
`;

const HorizontalLine = styled.div`
  width: 100%;
  height: 2px;
  background: #6CCFF6;
`;

const Contact = (props) => {
  return(
    <ContactDiv>
      <ContactItemDiv>
        <a style={{textDecoration:"none",color:"#000c11"}} href="https://www.linkedin.com/in/tyler-edmunds" target="_blank" rel="noreferrer noopener"><i className="fa fa-linkedin fa-3x" aria-hidden="true"></i></a>
        <div style={{fontSize:"1.2rem"}}>Tyler Edmunds</div>
      </ContactItemDiv>
      <HorizontalLine />
      <ContactItemDiv>
        <a style={{textDecoration:"none",color:"#000c11"}} href="mailto:tylerjedmunds@gmail.com?subject=Contacting%20You%20From%20Your%20Website" rel="noreferrer noopener"><i className="fa fa-envelope-o fa-3x" aria-hidden="true"></i></a>
        <div style={{fontSize:"1.2rem"}}>tylerjedmunds@gmail.com</div>
      </ContactItemDiv>
    </ContactDiv>
  )
};

export default Contact;
