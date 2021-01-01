import * as S from './style';

function ContactCard(props: any) {
  return (
    <>
      <S.ContactCard>{props.children}</S.ContactCard>
    </>
  );
}

export default ContactCard;
