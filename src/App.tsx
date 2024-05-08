import "@mantine/core/styles.css"
import { MantineProvider, createTheme } from "@mantine/core"
import Header from "./components/Header"
import Home from "./components/Home"
import Shop from "./components/Shop"
import Cart from "./components/Cart"
import { useState, useEffect } from "react"

const theme = createTheme({
  defaultRadius: "md",
  primaryColor: "teal",
})

export default function App({ page }: { page: string }) {
  const [inCart, setInCart] = useState(new Map())
  const [productDetails, setProductDetails] = useState<ProductType[]>([])

  useEffect(() => {
    const products: ProductType[] = []
    inCart.forEach(async (qty, productId) => {
      const res = await fetch(`https://fakestoreapi.com/products/${productId}`)
      const product = await res.json()
      products.push({ ...product, quantity: qty })
    })
    setProductDetails(products)
  }, [inCart])

  let cartCount = 0
  for (const val of inCart.values()) cartCount += val

  const addToCart = function (productId: number) {
    inCart.set(productId, (inCart.get(productId) ?? 0) + 1)
    setInCart(new Map(inCart))
  }
  return (
    <MantineProvider defaultColorScheme="auto" theme={theme}>
      <Header page={page} cartCount={cartCount} />
      {page === "home" ? (
        <Home />
      ) : page === "shop" ? (
        <Shop addToCart={addToCart} inCart={inCart} />
      ) : (
        <Cart productDetails={productDetails} />
      )}
    </MantineProvider>
  )
}

interface ProductType {
  id: number
  title: string
  description: string
  category: string
  price: string
  image: string
  quantity: number
}
