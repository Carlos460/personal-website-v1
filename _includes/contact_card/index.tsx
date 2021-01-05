import { motion } from 'framer-motion';

import * as S from './style';

const fadeIn = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

function ContactCard(props: any) {
  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.5 }}
        variants={fadeIn}
      >
        <S.ContactCard>
          <S.ContactingName>Carlos Flores</S.ContactingName>
          <S.ToolTip>
            <S.ContactBar>
              <S.ContactLink
                onClick={() => {
                  navigator.clipboard.writeText('carlosfloresalex@gmail.com');
                }}
              >
                📮 Email me at carlosflroesalex@gmail.com
              </S.ContactLink>
            </S.ContactBar>
          </S.ToolTip>
          <S.ContactBar>
            <S.ContactLink
              href="https://www.linkedin.com/in/carlos-flores-1795981b6/"
              target="_blank"
            >
              💬 You can contact me on Linkedin
            </S.ContactLink>
          </S.ContactBar>

          <S.ContactBar>
            <S.ContactLink href="https://github.com/Carlos460" target="_blank">
              👾 View my public repositories on Github
            </S.ContactLink>
          </S.ContactBar>

          {props.children}
        </S.ContactCard>
      </motion.div>
    </>
  );
}

export default ContactCard;
