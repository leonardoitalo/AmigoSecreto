import { createGlobalStyle } from 'styled-components'
import { colors } from './variablesCss'

const GlobalStyles = createGlobalStyle`
  html {
    background: ${colors.purple};
    font-family: 'Poppins', sans-serif;
    border: 2px solid black;
  }

  #root {
    min-height: 100vh;
  }
`

export default GlobalStyles
