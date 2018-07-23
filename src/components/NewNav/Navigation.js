import React, { Fragment } from 'react';
import styled from 'styled-components';
import mail from '../../../assets/001-mail.svg';
import blog from '../../../assets/002-blog.svg';
import resume from '../../../assets/003-pen.svg';
import portfolio from '../../../assets/004-bag.svg';
import NavigationLink from './navigation/NavigationLink';
import { Link } from 'react-router-dom';

const NavigationNav = styled.nav`
    display: none;

    @media (min-width: 800px) {
        display: grid;
        width: 80%;
        display: grid;
        grid-template: 100% / 20% 20% 20% 20% 20%;
        align-items: center;
        position: fixed;
        top: 0;
        left: 10%;
        background: rgba(51, 92, 103);
        z-index: 5;
    }
`;

const MobileNav = styled.nav`
    display: grid;
    width: 80%;
    display: grid;
    grid-template: 100% / 20% 20% 20% 20%;
    align-items: center;
    position: fixed;
    top: 0;
    left: 10%;
    background: rgba(51, 92, 103);
    z-index: 5;

    @media (min-width: 800px) {
        display: none;
        
    }
`

const Navigation = (props) => {
    return (
        <div>
            <NavigationNav>
                <NavigationLink to='/'>Home</NavigationLink>
                <NavigationLink to='/portfolio'>Portfolio</NavigationLink>
                <NavigationLink to='/blog'>Blog</NavigationLink>
                <NavigationLink to='/resume'>Resume</NavigationLink>
                <NavigationLink to='/contact'>Contact</NavigationLink>
            </NavigationNav>
            <MobileNav>
                <Link to='/portfolio'><img width="60%" height="60%" src={portfolio} /></Link>
                <Link to='/blog'><img width="60%" height="60%" src={blog}/></Link>
                <Link to='/resume'><img width="60%" height="60%" src={resume}/></Link>
                <Link to='/contact'><img width="60%" height="60%" src={mail}/></Link>
            </MobileNav>
        </div>
    )
}

export default Navigation;