import SkillCard from '@includes/skill_card';

import * as S from './style';
import * as T from '@includes/text';

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
            landscape, I love architect, nature, and portrait photography. I'm
            eager to learn new things and meet new people to work on projects.
          </T.BodyText>
          <T.BodyText>
            I'm always growing my skillset and knowledge to become more familiar
            with the variety of web technologies out there. I've become familiar
            with many programming paradigms like object-orientated programming
            and functional programming.
          </T.BodyText>
        </S.Wrap>
      </S.Container>
      <S.Container>
        <div style={{ textAlign: `center` }}>
          <T.SubHeading>Technologies I Use Daily!</T.SubHeading>
        </div>
        <div
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `center`,
            margin: `50px 0px`,
          }}
        >
          <SkillCard imageUrl={`/icons/javascript.png`}>
            <h3>JavaScript</h3>
          </SkillCard>
          <SkillCard imageUrl={`/icons/html-5.png`}>
            <h3>HTML 5</h3>
          </SkillCard>
          <SkillCard imageUrl={`/icons/css3.png`}>
            <h3>CSS 3</h3>
          </SkillCard>
          <SkillCard imageUrl={`/icons/react.png`}>
            <h3>React.js</h3>
          </SkillCard>
          <SkillCard translateY={35} imageUrl={`/icons/npm.svg`}>
            <h3>NPM</h3>
          </SkillCard>
          <SkillCard imageUrl={`/icons/git.png`}>
            <h3>Git</h3>
          </SkillCard>
        </div>
      </S.Container>
      <S.Container>
        <div style={{ textAlign: `center` }}>
          <T.SubHeading>Technologies I've Used In Projects!</T.SubHeading>
        </div>
        <div
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `center`,
            margin: `50px 0px`,
          }}
        >
          <SkillCard imageUrl={`/icons/nodejs.png`}>
            <h3>Node.js</h3>
          </SkillCard>
          <SkillCard imageUrl={`/icons/python.png`}>
            <h3>Python</h3>
          </SkillCard>
          <SkillCard imageUrl={`/icons/typescript.png`}>
            <h3>Typescript</h3>
          </SkillCard>
          <SkillCard invert={1} imageUrl={`/icons/expressjs.svg`}>
            <h3>Express.js</h3>
          </SkillCard>
          <SkillCard imageUrl={`/icons/mongodb.svg`}>
            <h3>MongoDB</h3>
          </SkillCard>
        </div>
      </S.Container>
    </>
  );
}
