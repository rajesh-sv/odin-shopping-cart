import { Overlay, Container, Title, Button, Text } from "@mantine/core"
import classes from "./Home.module.css"
import { Link } from "react-router-dom"

export function Home() {
  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container} size="md">
        <Title className={classes.title}>
          <Text
            fz={60}
            fw={900}
            variant="gradient"
            gradient={{ from: "yellow", to: "red", deg: 90 }}
          >
            One stop to satisfy all your Gaming needs.
          </Text>
        </Title>
        <Text className={classes.description} size="xl" mt="xl">
          Build the gaming PC that you dream about every night. Buy genuine
          gaming accesories with 2 year warranty. We deliver to all the regions
          of the world, even the artic circle.
        </Text>

        <Button
          component={Link}
          to="/shop"
          variant="gradient"
          gradient={{ from: "teal", to: "cyan", deg: 0 }}
          size="xl"
          radius="lg"
          className={classes.control}
        >
          Get Shopping
        </Button>
      </Container>
    </div>
  )
}

export default Home
