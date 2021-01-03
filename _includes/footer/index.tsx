import Link from 'next/link';
import { motion } from 'framer-motion';

import Section from '@includes/section';
import ContactCard from '@includes/contact_card';

import * as S from '@includes/text';

import { FooterLink } from './styles';

const fadeIn = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

export default function Footer() {
  return (
    <>
      <footer>
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
          variants={fadeIn}
        >
          <Section id="contact">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ContactCard></ContactCard>
            </div>
          </Section>
        </motion.div>
        <FooterLink href="https://github.com/Carlos460" target="_blank">
          <b>Github</b>
        </FooterLink>
        <FooterLink
          href="https://www.linkedin.com/in/carlos-flores-1795981b6/"
          target="_blank"
        >
          <b>Linkedin</b>
        </FooterLink>
      </footer>
    </>
  );
}
