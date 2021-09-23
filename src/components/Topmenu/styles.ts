import styled from 'styled-components'
import Image from 'next/image'
import { FaBars } from 'react-icons/fa'
import { darken } from 'polished'

export const Container = styled.div`
  /* Exemplo de media querie */
  /* @media (max-width: 800px) {
    button {
      margin-left: 0px;
    }
  } */

  background-color: ${props => props.theme.colors.primary};

  width: 100%;
  height: 51px;

  position: fixed;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0px 1px 5px #444;
`

export const BtnMenuContainer = styled.button`
  margin: 3px;
  margin-left: 10px;
  padding: 10px;
  border-radius: 4px;

  position: absolute;
  left: 0px;

  border: none;

  background-color: ${props => props.theme.colors.primary};

  &:hover,
  &:focus {
    background-color: ${props =>
      props.theme.colors.primary && darken(0.05, props.theme.colors.primary)};
  }
`

export const BtnMenu = styled(FaBars).attrs({
  size: '28'
})`
  fill: #fff;
`

export const Logo = styled(Image).attrs({
  width: '137px'
})``

export const MenuCollapsedContainer = styled.div`
  background: ${props => props.theme.colors.secondary};
  border-radius: 0px 0px 8px 8px;
  margin-top: 51px;
  padding-bottom: 30px;
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  align-content: flex-end;
  justify-content: space-around;

  box-shadow: 0px 1px 5px #444;
`
