import { Button, Container, Overlay, Text, Title } from '@mantine/core';
import classes from './Hero.module.css';

export function Hero() {
  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 90%, rgba(0, 0, 0, .65) 100%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container} size="md">
        <Title className={classes.title}>Web Design. Cloud Hosting. Business Solutions.</Title>
        <Text className={classes.description} size="xl" mt="xl">
          Whether you have a seedling of an idea, or already have roots, we can help it grow to its full potential.
        </Text>

        <Button color="#005523" variant="filled" size="sm" radius="xl" className={classes.control}>
          Get started
        </Button>
      </Container>
    </div>
  );
}


/**
 * filled' | 'light' | 'outline' | 'transparent' | 'white' | 'subtle' | 'default' | 'gradient';
 */