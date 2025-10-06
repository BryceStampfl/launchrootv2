import { Text, Title, Container, Flex, Image, Box } from "@mantine/core";
import classes from './LetsWorkTogether.module.css'
import NextImage from 'next/image';
import image from '@/public/undraw/shared-goals.svg'

export function LetsWorkTogether() {
    return(
        <Container p='1rem' id='workTogether' size='xl' mt={{base: '4rem', sm:'8rem'}}>
        <Flex direction={{base: 'column', sm: 'row'}}>
            <Flex direction='column' flex={1} gap='2rem'>
                <Title order={2} className={classes.title} ta="left">Lets Work Together</Title>
                
                <div>
                    <Title mb='0.5rem' order={4}>Why LaunchRoot?</Title>
                    <Text lh='20px' c='#707070ff' size='16px'>First we get the theme and color combinations for your business.
                        Then we design and go over a snapchat of a website page and mobile page.
                        Each site is tailored to your business goals with clean, modern design that fits your business and mobile-first responsiveness.
                    </Text>
                </div>

                <div>
                    <Title mb='0.5rem' order={4}>What does a typical project look like? </Title>
                    <Text lh='20px' c='#707070ff' size='16px'>First we get the theme and color combinations for your business.
                        Then we design and go over a snapchat of a website page and mobile page.
                        Each site is tailored to your business goals with clean, modern design that fits your business and mobile-first responsiveness.
                    </Text>
                </div>
                
                <div>
                    <Title mb='0.5rem' order={4}>How will LaunchRoot benefit my business? </Title>
                    <Text lh='20px' c='#707070ff'  size='16px' >You can focus on actually running your buisness instead of all the technical and so on</Text>
                </div>

             </Flex>

            <Box flex={1} >
                 <Image
                  fit='contain'
                  component={NextImage} 
                  src={image} 
                  alt="My image" />
            </Box>

        </Flex>
     
        </Container>
    )
}