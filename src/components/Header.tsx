import { Button, Group, Overlay, SegmentedControl, Center } from "@mantine/core"
import {
  IconDeviceGamepad2,
  IconHome2,
  IconRosetteDiscount,
  IconShoppingCart,
} from "@tabler/icons-react"
import { Link, useNavigate } from "react-router-dom"

function Header({ page }: { page: string }) {
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
            leftSection={<IconDeviceGamepad2 size={32} />}
          >
            Odin Gaming Store
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
                    <span>Cart</span>
                  </Center>
                ),
              },
            ]}
          />
        </Group>
      </Overlay>
    </header>
  )
}

export default Header