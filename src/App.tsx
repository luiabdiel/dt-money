import { ThemeProvider } from "styled-components"
import { Transactions } from "./pages/Transactions"
import { GlobalStyled } from "./styles/globala"
import { defaultTheme } from "./styles/themes/default"

export function App() {
  return(
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyled />
      <Transactions />
    </ThemeProvider>
  )
}
