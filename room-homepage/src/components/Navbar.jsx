import styled from 'styled-components'
import MenuIcon from '../assets/images/icon-hamburger.svg'
import Logo from '../assets/images/logo.svg'
const Nav = styled.nav`
 width: 100%;
 height: 60px;
 display: flex;
 padding: 20px;
 display: flex;
 justify-content: space-between;
`
const NavLinks = styled.ul`
  display: flex;
  gap: 20px;
  @media screen and (max-width: 375px) {
      display: none;
  }
`
const NavLink = styled.li`
  list-style: none;
  color: #fff;
  cursor: pointer;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 100%;
    bottom: 0;
    left: 0;
    background-color: #fff;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;

  }
  &:hover::after {
     transform: scaleX(1);
     transform-origin: bottom left;
  }
`
const NavMenu = styled.div`
  background-image: url(${MenuIcon});
  width: 30px;
  height: 30px;
  background-repeat: no-repeat;
  display: none;
  cursor: pointer;
  @media (max-width: 375px) {
    display: block;
  }
`
const NavLogo = styled.img`
   @media (max-width: 375px) {
     margin: 0 auto;
   }
`

const Navbar = () => {

  return <Nav>
    <NavMenu />
    <NavLogo src={Logo} />
    <NavLinks>
      <NavLink>Home</NavLink>
      <NavLink>Shop</NavLink>
      <NavLink>About</NavLink>
      <NavLink>Contact</NavLink>
    </NavLinks>
  </Nav>
}
export default Navbar