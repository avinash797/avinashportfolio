import React from 'react'
import {FaBars} from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from "./NavbarElements";

const Navbar = () => {
    return (
        <div>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    Avinash Joshi
                </NavLogo>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">About Me</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="projects">Projects</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="skills">Skills</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </div>
    )
}

export default Navbar
