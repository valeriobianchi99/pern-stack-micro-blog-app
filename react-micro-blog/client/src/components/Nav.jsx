import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StyledNav, { DesktopMenu, HamburgerButton, MobileMenu } from '../components/styled/Nav.styled';
import { PostModalButton } from './styled/PostModal.styled';

const Links = ({setNav, setModal}) => {
    return (
        <>
            <Link onClick={() => {if(setNav) setNav(false)}} to="/"><h1>Social Media</h1></Link>
            <Link onClick={() => {if(setNav) setNav(false)}} to="/feed"><p>Feed</p></Link>
            <Link onClick={() => {if(setNav) setNav(false)}} to="/account"><p>Account</p></Link>
            <PostModalButton onClick={() => {
                if(setNav) setNav(false);
                if(setModal) setModal(current=>!current);
                }}>
                Create post &nbsp; <i className='fas fa-plus'></i>
            </PostModalButton>
        </>
    );
}

const Nav = ({ setModal }) => {

    const [navOpen, setNav] = useState(false);
    return (
        <StyledNav>
            <HamburgerButton className='fas fa-bars' onClick={() => setNav(current => !current)} />
            <MobileMenu open={navOpen}>
                <Links setModal={setModal} setNav={setNav}></Links>
            </MobileMenu>
            <DesktopMenu>
                <Links setModal={setModal} setNav={null}></Links>
            </DesktopMenu>
        </StyledNav>
    )
}

export default Nav;