import styled from 'styled-components'

export const Container = styled.div``

export const AddressContainer = styled.div`
  display: grid;
  grid-template-columns: 0.01fr 1fr;
  grid-column-gap: 28px;
  grid-row-gap: 30px;
  align-items: center;
  color: ${props => props.theme.palette.primary.contrastText};
  font-size: 1.5rem;
  font-family: 'Roboto', sans-serif;
  padding: 2vw 20vw 15vw 20vw;
  > svg {
    font-size: 1.5rem;
  }
`

export const Text = styled.div`
  word-break: break-word;
`
