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
  width: 180px;
  border: none;
  border-radius: 15px;
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