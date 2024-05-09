import { ScrollArea, Space, Table, Group, ActionIcon } from "@mantine/core"
import { IconMinus, IconPlus } from "@tabler/icons-react"

function Cart({
  addToCart,
  removeFromCart,
  productDetails,
}: {
  addToCart: (productId: number) => void
  removeFromCart: (productId: number) => void
  productDetails: ProductInCartType[]
}) {
  let totalAmt = 0

  const rows = productDetails.map((product, index) => {
    const totalPrice =
      Math.round(Number(product.price) * product.quantity * 100) / 100
    totalAmt += totalPrice
    return (
      <Table.Tr key={product.id}>
        <Table.Td>{index + 1}</Table.Td>
        <Table.Td>{product.title}</Table.Td>
        <Table.Td>{product.price}</Table.Td>
        <Table.Td>
          <Group>
            <ActionIcon
              onClick={() => removeFromCart(product.id)}
              size="sm"
              variant="light"
            >
              <IconMinus size={12} />
            </ActionIcon>
            {product.quantity}
            <ActionIcon
              onClick={() => addToCart(product.id)}
              size="sm"
              variant="light"
            >
              <IconPlus size={12} />
            </ActionIcon>
          </Group>
        </Table.Td>
        <Table.Td>{`$${totalPrice}`}</Table.Td>
      </Table.Tr>
    )
  })

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
      <Table highlightOnHover striped>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>No.</Table.Th>
            <Table.Th>Product</Table.Th>
            <Table.Th>Price</Table.Th>
            <Table.Th>Quantity</Table.Th>
            <Table.Th>Total Price</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
        <Table.Tfoot>
          <Table.Td></Table.Td>
          <Table.Td></Table.Td>
          <Table.Td></Table.Td>
          <Table.Th>Total Amount</Table.Th>
          <Table.Td>{Math.round(totalAmt * 100) / 100}</Table.Td>
        </Table.Tfoot>
      </Table>
    </ScrollArea>
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

export default Cart
