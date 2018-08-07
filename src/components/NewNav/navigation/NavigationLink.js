import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledNavLink = styled(NavLink)`
    min-width: 7.5rem;
    text-align: center;
    text-decoration: none;
    padding: 1rem;
    color: ${props => props.theme.first.white};
    margin: 1rem;
    border-bottom: 4px solid transparent;
    border-top: 4px solid transparent;
    transition: all .05s ease-in;
    
    &.active {
        border-bottom: 4px solid ${props => props.theme.first.white};
        font-size: 1.4rem;
        border-top: 4px solid ${props => props.theme.first.white};
        &:hover {
            font-size: 1.4rem;
            border-bottom: 4px solid transparent;
            border-top: 4px solid transparent;
        }
    }

    &:hover {
        cursor: pointer;
        color: ${props => props.theme.first.white};
        border-bottom: 4px solid ${props => props.theme.first.white};
        border-top: 4px solid transparent;
    }
    
`;

const NavigationLink = (props) => {
    return (
        <StyledNavLink exact to={props.to} {...props}>{props.children}</StyledNavLink>
    )
}

export default NavigationLink;