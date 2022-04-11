import styled from 'styled-components'
import { Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from "react-router-dom";

export const Nav = styled.nav`
  background: #141414;
  height: 80px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and(max-width: 960px) {
    transition: 0.8s all ease;
  }
`


export const NavbarContainer = styled.div`
  box-shadow:  #2B6ABC ;
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
  color:  #2B6ABC;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`


export const NavMenu = styled.ul`
  display: flex; 
  align-items: center;
  list-style: none;
  text-align: center;
`

export const NavItem = styled.li`
  height: 80px;
`

export const NavLinks = styled(LinkS)`
color: #fff;
display: flex;
align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  
  &.active{
    border-bottom: 3px solid #002F63;
  }
  &:hover{
    transition: all 0.5s;
    background:  #2B6ABC;
  }
`