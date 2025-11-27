import { Burger, Center, Container, Group, Menu, Flex, Image, Box } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';
import NextImage from 'next/image';
import LogoText from '@/public/BrandText-Final.png';
import Icon from '@/public/BrandLogoFinal.svg';

const links = [
  { link: '/#services', label: 'Services' },
  { link: '/#clients', label: 'Clients & Portfolio' },
  { link: '/#workTogether', label: 'Work Together' },
  { link: '/#contact', label: 'Contact' },
];

export function HeaderMenu() {
  const [opened, { toggle, close }] = useDisclosure(false);

  const onMobileLinkClicked = (link: string | URL) => {
    close(); // close menu on mobile
    window.location.href = link.toString(); // use href for proper back button behavior
  };

  // Desktop links (hover menus)
  const desktopItems = links.map((link) => (
    <Menu
      key={link.label}
      trigger="hover"
      transitionProps={{ exitDuration: 0 }}
      withinPortal
    >
      <Menu.Target>
        <div className={classes.border}>
          <a href={link.link} className={classes.link}>
            <Center>
              <span className={classes.linkLabel}>{link.label}</span>
            </Center>
          </a>
        </div>
      </Menu.Target>
    </Menu>
  ));

  // Mobile links (close menu + your styling restored)
  const mobileItems = links.map((link) => (
    <div key={link.label} className={classes.border}>
      <Center>
      <a
        href={link.link}
        className={classes.link}
        onClick={(e) => {
          e.preventDefault(); // prevent instant jump
          onMobileLinkClicked(link.link);
        }}
      >
        {link.label}
      </a>
      </Center>
    </div>
  ));

  return (
    <header className={classes.header}>
      <Container size="xl" p={0}>
        <div className={classes.inner}>
          {/* Logo */}
          <Flex direction="row" h="100%"  justify={'flex-start'}>
            <Box className={classes.imageWrapper} >
              <Image 
                style={{ display: 'block', boxSizing: 'border-box' }}
              className={classes.headerIcon} component={NextImage} src={Icon} alt="My image"/>
            </Box>

            <Box className={classes.imageWrapper} >
              <Image   style={{ display: 'block' }}  className={classes.headerName} component={NextImage} src={LogoText} alt="My image" />
            </Box>
          </Flex>

          <div>
          {/* Desktop menu */}
          <Group gap={10} visibleFrom="md">
            {desktopItems}
          </Group>

          {/* Mobile burger button */}
          <Burger opened={opened} mx={24} onClick={toggle} size="md" hiddenFrom="md" />
          </div>
        </div>
      </Container>

      {/* Mobile menu (shown only when opened) */}
      {opened && (
        <div>
          <Flex
            direction="column"
            gap="2rem"
            style={{ backgroundColor: 'white', padding: '2rem' }}
          >
            {mobileItems}
          </Flex>
        </div>
      )}
    </header>
  );
}
