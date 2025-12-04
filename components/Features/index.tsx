import { IconBulb, IconDeviceLaptop, IconCloud } from '@tabler/icons-react';
import {
  Card,
  Container,
  Group,
  SimpleGrid,
  Text,
  Title,
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
  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="" className={classes.card} padding="xl">
      <feature.icon size={40} stroke={1} color='#005523' />
      <Text c='#2e2e2eff' fz='25px' fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="18px" c="#414141ff" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="xl" py="xl" id='services'>
      <Group justify="center">
        {/* <Badge variant="filled" size="lg">
          Best company ever
        </Badge> */}
      </Group>

      <Title  c='#2e2e2eff' order={2} className={classes.title} ta="center" mt="sm">
        Smart Solutions That Grow With Your Business</Title>

      <Text c="#414141ff" className={classes.description} ta="center" mt="md">
Offering everything from web design and hosting to complete business solutions.      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}