import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
type IContainer = {
  isOnTop: boolean
}
export const Container = styled.div<IContainer>`
  ${({ isOnTop }) =>
    isOnTop
      ? css`
          background: rgba(51, 51, 51, 0);
        `
      : css`
          background: rgba(51, 51, 51, 1);

          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

          z-index: 999;
        `}

  width: 100%;
  height: 10vw;

  display: flex;
  align-items: center;

  nav {
    width: 100%;
  }

  transition: all 0.5s;

  position: fixed;
  top: 0px;
`

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-right: 30px;

  a:first-child {
    padding: 0px 50px 0px 50px;
    border-right: 1px solid #dddddd;
    display: block;
    text-align: center;
    img {
      /* height: 40px;
      width: auto; */
    }
  }
  a {
    font-size: 14px;
    color: ${props => props.theme.palette.primary.contrastText};
    padding: 0px 10px 0px 10px;
    text-decoration: none;
    transition: color 0.8s;
    text-align: center;
    text-shadow: 1px 1px 2px black;

    &:hover {
      color: ${props => props.theme.palette.primary.main};
    }
    &.active {
      color: ${props => props.theme.palette.primary.main};
    }
  }
`

export const LogoContainer = styled.div``

export const Image = styled.img`
  height: 40px;
  width: auto;
`

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

export const ActiveBorder = styled(motion.div)`
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.palette.primary.main};
  height: 5px;
`
