import styled from "styled-components";

const Nav = styled.div`
position: sticky;
top: 0;
`;

export const HamburgerButton = styled.i`
position: absolute;
top: 0;
left: 0;
margin: 1rem;
z-index: 2;
font-size: 2.1rem;
@media(min-width: 600px){
    display: none;
}`

export const MobileMenu = styled.nav`

display: flex;
background-color: ${({ theme })=>theme.elevation_2};
position: absolute;
top: 0;
bottom: 0;
left: 0;
width: 35%;
flex-direction: column;
padding: 4rem .5rem;
gap: 2rem;
text-align: center;
font-size: 1.3rem;
font-weight: bold;
transition: transform 150ms ease-in;
transform: ${({ open })=> open ? "translateX(0%)" : "translateX(-100%)" };

a:first-child {
    text-decoration: none;
}

a {
    color: white;
}

@media(min-width: 600px){
    display: none;
}

`;

export const DesktopMenu = styled.nav`

display: flex;
background-color: ${({ theme })=>theme.elevation_2};
max-width: 100%;
height: 15%;
gap: 2rem;
font-size: 1.2rem;
align-items: center;
text-align: center;
padding: 1rem 2rem;

a:first-child {
    margin-right: auto;
    &:hover {
        text-decoration: none;
    }
}

a {
    text-decoration: none;
    color: white;
    &:hover {
        text-decoration: underline;
    }
}


@media(max-width: 600px){
    display: none;
}

`;

export default Nav;