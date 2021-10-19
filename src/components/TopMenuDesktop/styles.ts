import styled, { css } from 'styled-components'

type IContainer = {
  isOnTop: boolean
}
export const Container = styled.div<IContainer>`
  ${({ isOnTop }) =>
    isOnTop
      ? css`
          /* background: ${props => props.theme.colors.dark}; */
          background: rgba(51, 51, 51, 0);
        `
      : css`
          /* background: ${props => props.theme.colors.dark}; */
          background: rgba(51, 51, 51, 1);

          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        `}

  /* background: ${props => props.theme.colors.dark}; */

  width: 100%;
  /* height: 100%; */
  min-height: 150px;

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
  justify-content: space-between;
  padding-right: 30px;

  a:first-child {
    padding: 0px 50px 0px 50px;
    border-right: 1px solid #dddddd;
    display: block;
    text-align: center;
    img {
      height: 40px;
      width: auto;
    }
  }
  a {
    font-size: 14px;
    color: ${props => props.theme.colors.text};
    padding: 0px 10px 0px 10px;
    text-decoration: none;
    transition: color 0.8s;
    text-align: center;

    &:hover {
      color: ${props => props.theme.colors.gold};
    }
    &.active {
      color: ${props => props.theme.colors.gold};
    }
  }
`

export const LogoContainer = styled.div``