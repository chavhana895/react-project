import styled from 'styled-components'

export const CartItemContainer = styled.div`
 margin-bottom: 1rem;
  display: flex;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
`

export const CartItemImg = styled.img`
 width: 350px;
  object-fit: contain;
  border-radius: 10px;
`

export const CartItemDetails = styled.div`
 padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--secondary-color);
`

export const CartItemDetailTitle = styled.p`
 font-size: 1rem;
  font-weight: bold;
`

export const CartItemDetailDesc = styled.p`
 font-size: 0.8rem;
`

export const CartItemDetailPrice = styled.p`
font-size: 1rem;
  font-weight: bold;
`

export const CartItemAction = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0.6rem;
`

export const CartItemQty = styled.div`
  display: flex;
  align-items: center;
`

export const CartItemQtyInput = styled.div`
  padding: 10px;
  margin-left: 0.4rem;
  width: 60px;
  border-radius: 10px;
  border: 1px solid var(--secondary-color);
  outline: none;
`

export const ActionDeleteItemBtn = styled.button`
  width: 50px;
  height: 50px;
  border: 1px solid var(--secondary-color);
  border-radius: 50%;
  cursor: pointer;
  transition: all ease-in-out 0.7s;
  outline: none;
`