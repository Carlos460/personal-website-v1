import { motion } from 'framer-motion';

import Section from '@includes/section';
import ContactCard from '@includes/contact_card';

import * as S from './styles';

export default function Footer() {
  return (
    <>
      <S.Footer>
        <Section id="contact">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ContactCard></ContactCard>
          </div>
        </Section>
      </S.Footer>
    </>
  );
}
