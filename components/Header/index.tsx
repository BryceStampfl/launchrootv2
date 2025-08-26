// import { IconChevronDown } from '@tabler/icons-react';
import { Burger, Center, Container, Group, Menu, Flex } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
// import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './Header.module.css';

const links = [
  { link: '/about', label: 'Services' },
  { link: '/about', label: 'Clients & Portfolio' },
  { link: '/about', label: 'Features' },

];

export function HeaderMenu() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => {
    const menuItems = links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                {/* <IconChevronDown size={14} stroke={1.5} /> */}
              </Center>
            </a>
          </Menu.Target>
          {/* <Menu.Dropdown>{menuItems}</Menu.Dropdown> */}
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <header className={classes.header}>
      <Container size="xl">
        <div className={classes.inner}>

              <div className={classes.myImage}>
                 <img
                alt='brand'
                src="/BrandLogo-Text-Finalv2.png"
                style={{objectFit: 'contain'}}
              />
              </div>

         
          <Group gap={10} visibleFrom="sm" >
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </Container>
       {opened && (
            <div>
              <Flex 
              direction="column"
              gap='2rem'          
              style={{backgroundColor: 'white', padding: '2rem'}}>
               {items} 
               </Flex>
              </div>
          )}
          <div style={{height:'5px', backgroundColor: 'white'}}>&nbsp;</div>    
          </header>
  );
}