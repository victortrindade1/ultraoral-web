import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.div`
  background-color: ${props => props.theme.colors.primary};

  width: 30%;

  /* border: 2px solid ${props => props.theme.colors.background}; */
  border: none;
  box-sizing: border-box;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  word-wrap: break-word;

  margin-top: 15px;
`
export const IconContainer = styled.div`
  padding: 15px;
`

export const Icon = styled(Image).attrs({
  // width: '137px'
})``

export const Title = styled.div`
  font: 400 14px Roboto, sans-serif;
  color: ${props => props.theme.colors.background};
  padding-bottom: 15px;
  width: 95%;
`
