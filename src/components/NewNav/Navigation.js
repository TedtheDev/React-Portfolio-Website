import React, { Fragment } from 'react';
import styled from 'styled-components';
import mail from '../../../assets/001-mail.svg';
import blog from '../../../assets/002-blog.svg';
import resume from '../../../assets/003-pen.svg';
import portfolio from '../../../assets/004-bag.svg';
import home from '../../../assets/005-home.svg';
import NavigationLink from './navigation/NavigationLink';
import { Link } from 'react-router-dom';

const NavigationWrapper = styled.div`
    background-color: rgba(51, 92, 103);
    position: fixed;
    top: 0;
    left: 9%;
    width: 81%;
    height: 10%;
    z-index: 5;
`;

const NavigationNav = styled.nav`
    display: none;

    @media (min-width: 800px) {
        display: grid;
        grid-template: 100% / 20% 20% 20% 20% 20%;
        align-items: center;
        height: 100%;
    }
`;

const MobileNav = styled.nav`
    display: grid;
    grid-template: 100% / repeat(5, 20%);
    height: 100%;
    width: 100%;
    justify-items: center;
    @media (min-width: 800px) {
        display: none;
    }
`;

const MobileLink = styled(Link)`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MobileLinkImg = styled.img`
    height: 50%;
`;

const Navigation = (props) => {
    return (
        <NavigationWrapper>
            <MobileNav>
                <MobileLink to='/'>
                    <MobileLinkImg src={home} />
                </MobileLink>
                <MobileLink to='/portfolio'>
                    <MobileLinkImg src={portfolio} />
                </MobileLink>
                <MobileLink to='/blog'>
                    <MobileLinkImg src={blog}/>
                    </MobileLink>
                <MobileLink to='/resume'>
                    <MobileLinkImg src={resume}/>
                    </MobileLink>
                <MobileLink to='/contact'>
                    <MobileLinkImg  src={mail}/>
                </MobileLink>
            </MobileNav>
            <NavigationNav>
                <NavigationLink to='/'>Home</NavigationLink>
                <NavigationLink to='/portfolio'>Portfolio</NavigationLink>
                <NavigationLink to='/blog'>Blog</NavigationLink>
                <NavigationLink to='/resume'>Resume</NavigationLink>
                <NavigationLink to='/contact'>Contact</NavigationLink>
            </NavigationNav>
        </NavigationWrapper>
    )
}

export default Navigation;