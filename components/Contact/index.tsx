import Image from "next/image";
import styles from './Contact.module.css';

const Contact: React.FC = () => {
    return (
        <div id='contact' className={styles.container}>
            <h2>Contact Us</h2>

            <div className={styles.flexContainer}>
                <div className={styles.imageWrapper}>
                    <Image
                        src='/undraw/contact-us.svg'
                        fill
                        alt="Contact illustration"
                        style={{ objectFit: 'contain' }}
                    />
                </div>

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

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
