import { injectGlobal } from 'styled-components'

const globalStyles = injectGlobal`
  * {
    box-sizing: border-box;
  }
  a {
    color: #5284ff;
  }
  body {
    font-family: Overpass;
    background: #F0F6FA;
  }
`

export default globalStyles
