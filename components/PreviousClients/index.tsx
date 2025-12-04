import { Box, Title } from '@mantine/core';
import styles from './style.module.css'
import Image from 'next/image';

const PreviousClients: React.FC = () => {
    return (
        <Box p='1rem' mb='2rem' className={styles.container} id='clients'>
            <Title c='#2e2e2eff' order={2} className={styles.title} ta="center" mt="sm">
        Some Of Our Previous Clients</Title>

            <div className={styles.flex}>

                   <div className={styles.imageWrapper}>
                    <Image
                        src="/logos/roadbackLogo.png"
                        fill
                        alt="logo"
                        style={{ objectFit: 'contain' }}
                    />
                </div>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/logos/PFF.png"
                        fill
                        alt="logo"
                        style={{ objectFit: 'contain' }}
                    />
                </div>

                <div className={styles.imageWrapper}>
                    <Image
                        src="/logos/RioRockLogo.png"
                        fill
                        alt="logo"
                        style={{ objectFit: 'contain' }}
                    />
                </div>

             
            </div>
        </Box>
    )
}
export default PreviousClients;