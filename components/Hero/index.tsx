import { Button, Container, Overlay, Text, Title } from '@mantine/core';
import classes from './Hero.module.css';

export function Hero() {
  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.4) 90%, rgba(0, 0, 0, .65) 100%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container} size="md">
        <Title ff='SoftSans' c='white' className={classes.title}>Web Design. Cloud Hosting. Business Solutions.</Title>
        <Text ff='montserrat' c='white' className={classes.description} size="xl" mt="xl">
          Whether you have a seedling of an idea, or already have roots, we can help it grow to its full potential.
        </Text>

<<<<<<< HEAD
        <Button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} color="#005523" variant="filled" size="sm" radius="sm" className={classes.control}>
          <Text ff='montserrat' c='white'>Get Started</Text>
=======
        <Button color="#005523" variant="filled" size="sm" radius="sm" className={classes.control}>
          <Text ff='montserrat'  c='white'>Get Started</Text>
>>>>>>> origin/master
        </Button>
      </Container>
    </div>
  );
}


/**
 * filled' | 'light' | 'outline' | 'transparent' | 'white' | 'subtle' | 'default' | 'gradient';
 */