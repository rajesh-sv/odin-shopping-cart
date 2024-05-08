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
} from "@mantine/core"
import { useLoaderData } from "react-router-dom"

function Shop() {
  const products = useLoaderData()
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
        {products.map(
          (product: {
            id: number
            title: string
            description: string
            category: string
            price: string
            image: string
          }) => (
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

                <Button variant="outline" color="blue" fullWidth>
                  Add to cart
                </Button>
              </Card>
            </GridCol>
          ),
        )}
      </Grid>
    </ScrollArea>
  )
}

export default Shop
