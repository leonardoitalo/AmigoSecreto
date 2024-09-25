import { createGlobalStyle } from 'styled-components'
import { colors } from './variablesCss'

const GlobalStyles = createGlobalStyle`
  html {

    font-family: 'Poppins', sans-serif;
    border: 2px solid black;
  }

  #root {
    min-height: 100vh;
    background-color: ${colors.purple};;
  }
`

export default GlobalStyles
