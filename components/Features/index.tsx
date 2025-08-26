import { IconBulb, IconDeviceLaptop, IconCloud } from '@tabler/icons-react';
import {
  Card,
  Container,
  Group,
  SimpleGrid,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import classes from './Features.module.css';

const mockdata = [
  {
    title: 'Web Design',
    description:
      'We build custom websites using the latest technologies for top performance, security, and flexibility. Each site is tailored to your business goals with clean, modern design that fits your business and mobile-first responsiveness.',
    icon: IconDeviceLaptop,
  },
  {
    title: 'Cloud Hosting',
    description:
      'We offer reliable, secure cloud hosting built for speed and scalability. Your site stays online and loads fast. Enjoy peace of mind with automatic backups and a proven track record.',
    icon: IconCloud,
  },
  {
    title: 'Business Solutions',
    description:
      'We provide smart, scalable business solutions that streamline operations, boost productivity, and support growth. From automation to analytics, our solutions are tailored to fit your workflow and deliver real results.',
    icon: IconBulb,
  },
];

export function FeaturesCards() {
  const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="" className={classes.card} padding="xl">
      <feature.icon size={40} stroke={1} color={theme.colors.green[9]} />
      <Text fz='25px' fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="18px" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="xl" py="xl">
      <Group justify="center">
        {/* <Badge variant="filled" size="lg">
          Best company ever
        </Badge> */}
      </Group>

      <Title order={2} className={classes.title} ta="center" mt="sm">
        Integrate effortlessly with any technology stack
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when
        hunger drives it to try biting a Steel-type Pokémon.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}