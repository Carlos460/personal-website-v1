import SectionLink from '@includes/SectionLink';

import * as S from './style';
import * as T from '@includes/text';

S.Button.defaultProps = {
  theme: {
    textColor: `var(--dark)`,
    border: `solid transparent 2px`,
    bgColor: `var(--primary)`,
  },
};

export default function About() {
  return (
    <>
      <S.Container>
        <S.Wrap>
          <T.Heading>About me</T.Heading>
          <T.BodyText>
            My name is Carlos Flores, an outgoing, dedicated, and curious
            individual. Javascript is the primary programming language I've used
            to bring projects to life. I'm currently working with React.js to
            build front end applications and have used Next.js to make my
            portfolio website alongside Contentful. Outside the programming
            landscape, I love architecture, nature, and portrait photography.
            I'm eager to learn new things and meet new people to work on
            projects.
          </T.BodyText>
          <T.BodyText>
            I'm always growing my skillset to become more familiar with the
            variety of web technologies out there. My focus is to learn more
            about Back-End Development and further reinforce my Typescript
            knowledge.
          </T.BodyText>
          <S.ButtonContainer>
            <form
              action={`https://drive.google.com/file/d/1XeROqVfO1h99G9Kd_2I0yltY78lW0OpZ/view?usp=sharing`}
              target={`_blank`}
            >
              <S.Button>Resume</S.Button>
            </form>
          </S.ButtonContainer>
        </S.Wrap>
        <SectionLink linkTo={`#skills`}>Skills</SectionLink>
      </S.Container>
    </>
  );
}
