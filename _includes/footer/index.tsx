import { motion } from 'framer-motion';

import Section from '@includes/section';
import ContactCard from '@includes/contact_card';

import * as S from '@includes/text';

import { FooterLink } from './styles';

export default function Footer() {
  return (
    <>
      <footer>
        <Section id="contact">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ContactCard>
              <FooterLink href="https://github.com/Carlos460" target="_blank">
                <b>Github</b>
              </FooterLink>
              <FooterLink
                href="https://www.linkedin.com/in/carlos-flores-1795981b6/"
                target="_blank"
              >
                <b>Linkedin</b>
              </FooterLink>
            </ContactCard>
          </div>
        </Section>
      </footer>
    </>
  );
}
