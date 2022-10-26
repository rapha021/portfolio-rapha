import styled, { createGlobalStyle } from "styled-components"

interface IProps {
  dark: boolean
  palette: any
}

const GlobalStyle = createGlobalStyle<IProps>`
    body {
        background-color: ${(p) =>
          p.dark ? p.palette.background.default : "#f5f5f5"};
    }
    *{transition: all 300ms}

   
`

export default GlobalStyle

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`
