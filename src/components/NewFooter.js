import React from 'react';
import styled from 'styled-components';

const FooterDiv = styled.footer`
    grid-area: footer;
    display: grid;
    grid-template: 100% / 2fr 1fr;
    grid-template-areas: 
        "links credits";
    background-color: rgba(51, 92, 103);
    border-top: 1px solid rgba(255, 243, 176);
    margin-top: 1rem;
`;

const LinksWrapper = styled.div`
    grid-area: links;
    display: flex;
    align-items: center;
    width: 40%;
`;

const GitHubLink = styled.a`
    text-decoration: none;
    color: ${props => props.theme.first.white};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
    
    & i {
        margin-right: .5rem;
        
        @media (min-height: 750px) {
            font-size: 3rem;
        }
    }

    & span {
        font-size: .8rem;
    }
`;

const LinkedInProfileLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration: none;

    &:link,
    &:visited {
        color: ${props => props.theme.first.white}
    }

    & i {
        margin-right: .5rem;

        @media (min-height: 750px) {
            font-size: 3rem;
        }
    }

    & span {
        font-size: .8rem;
    }
`;

const CreditsDiv = styled.div`
    grid-area: credits;
    align-self: center;
    justify-self: end;
    font-size: .6rem;
    position: relative;
    cursor: pointer;

    &:before {
        content: 'Icons made by Freepik, Those Icons, and EpicCoders from www.flaticon.com';
        position: absolute;
        top: -7rem;
        left: -5rem;
        background-color: ${props => props.theme.first.white};
        color: ${props => props.theme.first.blue};
        border: 1px solid ${props => props.theme.first.blue};
        border-radius: 10px;
        padding: 1rem;
        pointer-events: none;
        opacity: 0;
        transition: opacity .2s linear;
    }

    &:hover&:before {
        opacity: 1;
    }
`;

const NewFooter = (props) => {
    return (
        <FooterDiv>
            <LinksWrapper>
                <GitHubLink href="https://github.com/TedtheDev" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github" aria-hidden="true"></i>
                    <span>TedtheDev</span>
                </GitHubLink>
                <LinkedInProfileLink href="https://www.linkedin.com/in/tyler-edmunds/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin" aria-hidden="true"></i>
                    <span>Tyler Edmunds</span>
                </LinkedInProfileLink>
            </LinksWrapper>
            <CreditsDiv>Credits</CreditsDiv>
        </FooterDiv>
    )
}

export default NewFooter;