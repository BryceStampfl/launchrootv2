import styles from './Contact.module.css';
import { Button } from '@mantine/core';

import useContactForm from "@/hooks/useContactForm";
import useForm from "@/hooks/useForm";
import { JSX } from 'react';

export default function ContactForm(): JSX.Element {

  const { values, updateValue, resetValues } = useForm({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const { name, email, message, phone } = values;

  const { loading, outputMessage, submitContactForm } = useContactForm({
    values,
    resetValues,
  });

  return (
    <div id='contact' className={styles.container}>
      <h2>Contact Us</h2>

      <div className={styles.flexContainer}>
        <form 
          className={styles.formWrapper}
          onSubmit={submitContactForm}
        >
          <label htmlFor="name">Name</label>
          <input 
            id="name" 
            name="name"
            type="text" 
            required 
            placeholder="Your name"
            onChange={updateValue}
            value={name}
          />

          <label htmlFor="email">Email</label>
          <input 
            id="email" 
            name="email"
            type="email" 
            required 
            placeholder="your.email@example.com"
            onChange={updateValue}
            value={email}
          />

          <label htmlFor="phone">Phone Number</label>
          <input 
            id="phone"
            name="phone"
            type="tel" 
            placeholder="(optional)" 
            onChange={updateValue}
            value={phone}
          />

          <label htmlFor="message">Send us a message!</label>
          <textarea 
            id="message"
            name="message"
            placeholder="Your message here..."
            onChange={updateValue}
            value={message}
          />

          <Button 
            type="submit"
            variant="gradient"
            gradient={{ from: '#133337', to: '#005523', deg: 90 }}
            size='lg'
            color='#133337'
          >
            {loading ? "Sending..." : outputMessage === "Email sent successfully!" ? "Email received!" : "Submit"}          </Button>
        </form>

        {/* Output message like the guide */}
        {/* <p className={styles.statusMessage}>
          {outputMessage || "Awaiting submission..."}
        </p> */}
      </div>
    </div>
  );
}
