import styled from 'styled-components'

export const CartContainer = styled.div`
 margin: 2rem auto;
  width: 1100px;
  display: flex;
  justify-content: space-between;
`

export const CartItems = styled.div`
  flex: 0.7;
  margin-right: 1rem;
`

export const CartSummary = styled.div`
  height: 250px;
  flex: 0.3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
`

export const SummaryTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: bold;
`

export const SummaryPrice = styled.div`
  display: flex;
  align-items: center;
`

export const SummaryCheckoutBtn = styled.div`
 padding: 10px 17px;
  border: 1px solid var(--secondary-color);
  border-radius: 10px;
  background: var(--primary-color);
  color: var(--light-color);
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
`