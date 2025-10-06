import styles from './Contact.module.css';
import { Button } from '@mantine/core';

const Contact: React.FC = () => {
    return (
        <div id='contact' className={styles.container}>
            <h2>Contact Us</h2>

            <div className={styles.flexContainer}>

                <form className={styles.formWrapper} /* use form element for semantics */
                    onSubmit={e => {
                        e.preventDefault();
                        // handle submit logic here
                    }}
                >
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" required placeholder="Your name" />

                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" required placeholder="your.email@example.com" />

                    <label htmlFor="phone">Phone Number</label>
                    <input id="phone" type="tel" placeholder="(optional)" />

                    <label htmlFor="message">Send us a message!</label>
                    <textarea id="message" placeholder="Your message here..." />

                    <Button 
                          variant="gradient"
                    gradient={{ from: '#133337', to: '#005523', deg: 90 }}
                    size='lg'
                    color='#133337'>Submit</Button>
                    
                </form>
            </div>
        </div>
    );
};

export default Contact;
