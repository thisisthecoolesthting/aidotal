import type { Metadata } from 'next';
import ContactForm from './ContactForm';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Contact AIDotAL',
  description: 'Get in touch with the AIDotAL team about .al domain registration, managed DNS, agency plans, or technical support. We typically respond within one business day.',
};

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <div className="section-max">
        <div className={styles.header}>
          <p className="kicker">CONTACT</p>
          <h1>Get in Touch</h1>
          <p className={styles.sub}>We typically respond within one business day.</p>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
