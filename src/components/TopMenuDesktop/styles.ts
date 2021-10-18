import styled from 'styled-components'

export const Container = styled.div`
  background: ${props => props.theme.colors.dark};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  width: 100%;
  height: 100%;
  min-height: 150px;

  display: flex;
  align-items: center;

  nav {
    width: 100%;
  }
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
