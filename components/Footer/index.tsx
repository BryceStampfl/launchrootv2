import { IconMail } from '@tabler/icons-react';
import { ActionIcon, Anchor, Group, Image, Box, Container } from '@mantine/core';
// import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './Footer.module.css';
import NextImage from 'next/image';
import Icon from '@/public/BrandLogoFinal.svg'

const links = [
  { link: '#', label: 'Contact' },
  { link: '#', label: 'Privacy' },
  { link: '#', label: 'LinkedIn' },

];

export function Footer() {
  const items = links.map((link) => (
    <Anchor
      c="dimmed"
      key={link.label}
      href={link.link}
      lh={1}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
          <Container size="xl">
    <div className={classes.footer}>
      <div className={classes.inner}>
               <Box className={classes.imageWrapper} >
                  <Image component={NextImage} src={Icon} alt="My image" />
                </Box>

        <Group className={classes.links}>{items}</Group>

        <Group gap="xs" justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconMail size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </div>
    </div>
    </Container>
  );
}