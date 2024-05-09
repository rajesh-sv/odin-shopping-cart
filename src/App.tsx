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
  const [allProducts, setAllProducts] = useState<ProductType[]>([])

  useEffect(() => {
    async function getAllProducts() {
      const res = await fetch("https://fakestoreapi.com/products")
      return await res.json()
    }
    getAllProducts().then((data) => setAllProducts(data))
  }, [])

  const productDetails: ProductInCartType[] = []
  for (const product of allProducts) {
    if (inCart.has(product.id))
      productDetails.push({ ...product, quantity: inCart.get(product.id) })
  }

  let cartCount = 0
  for (const val of inCart.values()) cartCount += val

  const addToCart = function (productId: number) {
    inCart.set(productId, (inCart.get(productId) ?? 0) + 1)
    setInCart(new Map(inCart))
  }

  const removeFromCart = function (productId: number) {
    const productQty = inCart.get(productId)
    if (productQty === 1) {
      inCart.delete(productId)
    } else {
      inCart.set(productId, productQty - 1)
    }
    setInCart(new Map(inCart))
  }
  return (
    <MantineProvider defaultColorScheme="auto" theme={theme}>
      <Header page={page} cartCount={cartCount} />
      {page === "home" ? (
        <Home />
      ) : page === "shop" ? (
        <Shop
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          inCart={inCart}
          allProducts={allProducts}
        />
      ) : (
        <Cart
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          productDetails={productDetails}
        />
      )}
    </MantineProvider>
  )
}

interface ProductInCartType {
  id: number
  title: string
  description: string
  category: string
  price: string
  image: string
  quantity: number
}

interface ProductType {
  id: number
  title: string
  description: string
  category: string
  price: string
  image: string
}
