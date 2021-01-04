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
        <S.ContactCard>{props.children}</S.ContactCard>
      </motion.div>
    </>
  );
}

export default ContactCard;
