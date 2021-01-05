import { motion } from 'framer-motion';

import Section from '@includes/section';
import ContactCard from '@includes/contact_card';

export default function Footer() {
  return (
    <>
      <footer>
        <Section id="contact">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ContactCard></ContactCard>
          </div>
        </Section>
      </footer>
    </>
  );
}
