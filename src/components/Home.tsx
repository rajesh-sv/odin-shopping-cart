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
            Buy clothes, SSDs, Monitors & Gold!
          </Text>
        </Title>
        <Text className={classes.description} size="xl" mt="xl">
          I have to fill something here so that the home page looks good. So let
          me give you a quote "Only a few know, how much one must know to know
          how little one knows." - Werner Heisenberg
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
