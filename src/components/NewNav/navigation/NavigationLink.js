import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavLink = styled(Link)`
    text-align: center;
    text-decoration: none;
    padding: 1rem;
    border: 1px solid ${props => props.theme.first.white};
    color: ${props => props.theme.first.white};
    margin: 1rem;
    border-radius: 5px;
    &:hover {
        cursor: pointer;
    }
`;

const NavigationLink = (props) => {
    return (
        <NavLink to={props.to} {...props}>{props.children}</NavLink>
    )
}

export default NavigationLink;