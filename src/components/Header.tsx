import { Button, Group, Overlay, SegmentedControl, Center } from "@mantine/core"
import {
  IconBasket,
  IconHome2,
  IconRosetteDiscount,
  IconShoppingCart,
} from "@tabler/icons-react"
import { Link, useNavigate } from "react-router-dom"
import ThemeToggle from "./ThemeToggle"

function Header({ page, cartCount }: { page: string; cartCount: number }) {
  const navigate = useNavigate()
  return (
    <header>
      <Overlay fixed backgroundOpacity={0.1} blur={4} h={64}>
        <Group h={64} ml={32} mr={32}>
          <Button
            size="lg"
            variant="subtle"
            component={Link}
            to="/home"
            leftSection={<IconBasket size={32} />}
          >
            Shopping Cart
          </Button>
          <SegmentedControl
            color="teal"
            withItemsBorders={false}
            w={400}
            ml="auto"
            size="md"
            value={page}
            onChange={(value) => navigate(`/${value}`)}
            data={[
              {
                value: "home",
                label: (
                  <Center style={{ gap: 10 }}>
                    <IconHome2 size={20} />
                    <span>Home</span>
                  </Center>
                ),
              },
              {
                value: "shop",
                label: (
                  <Center style={{ gap: 10 }}>
                    <IconRosetteDiscount size={20} />
                    <span>Shop</span>
                  </Center>
                ),
              },
              {
                value: "cart",
                label: (
                  <Center style={{ gap: 10 }}>
                    <IconShoppingCart size={20} />
                    <span>Cart {cartCount}</span>
                  </Center>
                ),
              },
            ]}
          />
          <ThemeToggle />
        </Group>
      </Overlay>
    </header>
  )
}

export default Header
