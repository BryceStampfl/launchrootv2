// import { Carousel } from '@mantine/carousel';
import { Paper, Text, Title, Flex, Overlay, Box } from '@mantine/core';
// import { useMediaQuery } from '@mantine/hooks';
import classes from './Clients.module.css';

interface CardProps {
  image: string;
  title: string;
  category: string;
  url: string;
}

function Card({ image, title, category, url }: CardProps) {
  return (
    
    <Paper 
    onClick={() => window.open(url, "_blank")}
      pos='relative' p="xl" radius="0"style={{ backgroundImage: `url(${image})`, cursor: "pointer" }}className={classes.card}
    >         
      <Overlay color="#000000ff"
          backgroundOpacity={0.6} 
          zIndex={1} />
      <Box pos='static' style={{zIndex: 2}} >
        <Text c='white' className={classes.category} size="xs">
          {category}
        </Text>
        <Title  c='white' order={3} className={classes.title}>
          {title}
        </Title>
      </Box>
    </Paper>
  );
}

const data = [
  {
    image:
      '/Clients/PenrynFlowerFarm.jpg',
    title: 'Penryn Flower Farm',
    category: 'Small Business',
    url: 'https://PenrynFlowerFarm.com'
  },
  {
    image:
      '/Clients/Fashion.webp',
    title: 'Fashion Brand',
    category: 'Fashion',
    url: 'https://main.d37qmw9j30co66.amplifyapp.com/'
  },
  {
    image:
      '/Clients/Truck.webp',
    title: 'Moving Service',
    category: 'small business',
    url: 'https://main.d3psmycug9ml8.amplifyapp.com/'
  },

];

function ClientsTitleBox() {
  return(
          <div className={classes.container}>
            <Flex 
                style={{height: '100%'}} 
                p='1rem'
                direction={{ base: 'column', sm: 'row' }}
                justify='center'
                align='center'
                gap={{base: '1rem', sm: '10rem' }}
            >
              <Text c='white' size="34px" >Explore Our Recent Work</Text>
              <Text style={{maxWidth:'600px'}} c='white' size='md'>Websites, software applications, and more. It's all right here. Browse our comprehensive case studies below to learn more about our unique process - from strategy through launch.</Text>

            </Flex>
          </div>

  )
}

export function Clients() {
  const slides = data.map((item) => (
    
          <Card  key={item.title} {...item} />
  ));
    return(
      <div>
        <ClientsTitleBox />
         <Flex 
            mih={50}
            gap="0"
            justify="center"
            align="center"
            direction="row"
            wrap={{base: "wrap", md: 'nowrap'}}
          >
        {slides}
        </Flex>
              </div>

    )
  
}