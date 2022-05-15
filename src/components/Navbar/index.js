import React from "react";
import {Nav, NavbarContainer, NavItem, NavLinks, NavLogo, NavMenu} from "./NavbarElements";
const Navbar = () => {
    return (
       <>
           <Nav>
               <NavbarContainer>
                <NavLogo to ="/">Lore Ipsum</NavLogo>
                   <NavMenu>
                       <NavItem>
                           <NavLinks to="/">Home
                           </NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks to="/photos">Photos
                           </NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks to="/photos">Photos
                           </NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks to="/about">Pusto
                           </NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks to="/plot">Plots
                           </NavLinks>
                       </NavItem>
                   </NavMenu>
               </NavbarContainer>
           </Nav>
       </>
    );
};


export default Navbar;