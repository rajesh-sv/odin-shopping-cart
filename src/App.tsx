import "@mantine/core/styles.css"
import { MantineProvider, createTheme } from "@mantine/core"
import Header from "./components/Header"
import Home from "./components/Home"
import Shop from "./components/Shop"
import Cart from "./components/Cart"

const theme = createTheme({
  defaultRadius: "md",
  primaryColor: "teal",
})

export default function App({ page }: { page: string }) {
  return (
    <MantineProvider defaultColorScheme="auto" theme={theme}>
      <Header page={page} />
      {page === "home" ? <Home /> : page === "shop" ? <Shop /> : <Cart />}
    </MantineProvider>
  )
}
