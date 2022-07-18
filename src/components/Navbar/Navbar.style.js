import styled from 'styled-components'

export const NavbarContainer = styled.div`
 width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem;
  background: var(--primary-color);
  position: sticky;
  top: 0;
  left: 0;
`

export const NavbarLogo = styled.h2`
  font-size: 40px;
  font-weight: bold;
  color: #fff;
`

export const NavbarCart = styled.div`
 background: #fff;
  width: 80px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;
`

export const NavbarCartTitle = styled.h3`
  font-size: 30px;
  font-weight: bold;
  color: var(--dark-color);
`

export const NavbarCartCntr = styled.div`
 height: 40px;
  width: 40px;
  border: 1px solid var(--secondary-color);
  border-radius: 50%;
  color: var(--dark-color);
  background: var(--light-color);
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Logo = styled.a`
padding: 1rem 0;
color: #7b7fda;
text-decoration: none;
font-weight: 800;
font-size: 1.7rem;

span{
  font-weight: 300;
  font-size: 1.3rem;
}
`

export const Menu = styled.div`
display: flex;
display-content: space-between;
align-items: center;
position: relative;
`

export const MenuLink= styled.a`
padding: 1rem 2rem;
cursor: pointer;
text-align: center;
text-decoration: none;
color: black;
transition: all 0.3s ease-in;
font-size: 0.9rem;

&:hover{
  color: #7b7fda
}
`