import styled from 'styled-components'

export const ProductContainer = styled.div`
  width: 900px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
`

export const ProductImg = styled.img`
  width: 250px;
  object-fit: contain;
  border-radius: 10px;
`

export const ProductDetail = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ProductDetailTitle = styled.p`
  font-size: 0.8rem;
  font-weight: bold;
  color: var(--secondary-color);
`

export const ProductDetailDesc = styled.p`
  font-size: 0.85rem;
  color: var(--secondary-color);
`

export const ProductDetailsPrice = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--secondary-color);
`

export const ProductButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem;
`

export const ProductButtonsBtn = styled.button`
  width: 100px;
  padding: 0.5rem;
  border: 1px solid var(--secondary-color);
  border-radius: 10px;
  font-size: 0.65rem;
  font-weight: bold;
  cursor: pointer;
`

export const ProductButtonsView = styled.div`
  background: var(--light-color);
  color: var(--secondary-color);
`

export const ProductButtonsAdd = styled.div`
  background: var(--secondary-color);
  color: var(--light-color);
`