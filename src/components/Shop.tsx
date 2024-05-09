import {
  Card,
  Grid,
  ScrollArea,
  Space,
  Group,
  Text,
  Badge,
  Button,
  GridCol,
  Image,
  ActionIcon,
} from "@mantine/core"
import { IconMinus, IconPlus } from "@tabler/icons-react"

function Shop({
  addToCart,
  removeFromCart,
  inCart,
  allProducts,
}: {
  addToCart: (productId: number) => void
  removeFromCart: (productId: number) => void
  inCart: Map<number, number>
  allProducts: ProductType[]
}) {
  return (
    <ScrollArea
      pl={40}
      pr={40}
      h="100vh"
      scrollHideDelay={500}
      offsetScrollbars
      scrollbarSize={20}
    >
      <Space h="70"></Space>
      <Grid>
        {allProducts.map((product: ProductType) => (
          <GridCol key={product.id} span={3}>
            <Card shadow="sm" padding="lg" radius="md" h={400} withBorder>
              <Image
                h={100}
                w="auto"
                fit="contain"
                src={product.image}
                alt={product.title}
              />

              <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500} lineClamp={1}>
                  {product.title}
                </Text>
                <Badge color="pink">{`$${product.price}`}</Badge>
              </Group>

              <Text size="sm" c="dimmed" lineClamp={5}>
                {product.description}
              </Text>
              {inCart.has(product.id) ? (
                <Group>
                  <ActionIcon
                    onClick={() => removeFromCart(product.id)}
                    size="sm"
                    variant="light"
                  >
                    <IconMinus size={12} />
                  </ActionIcon>
                  {inCart.get(product.id)}
                  <ActionIcon
                    onClick={() => addToCart(product.id)}
                    size="sm"
                    variant="light"
                  >
                    <IconPlus size={12} />
                  </ActionIcon>
                </Group>
              ) : (
                <Button
                  variant="outline"
                  color="teal"
                  fullWidth
                  onClick={() => addToCart(product.id)}
                >
                  Add to cart
                </Button>
              )}
            </Card>
          </GridCol>
        ))}
      </Grid>
    </ScrollArea>
  )
}

interface ProductType {
  id: number
  title: string
  description: string
  category: string
  price: string
  image: string
}

export default Shop
