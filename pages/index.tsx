// Import Layout Components
import { GetStaticProps } from 'next';

import Section from '@includes/section';
import ContactCard from '@includes/contact_card';
import ProjectCard from '@includes/project_card';
import Navbar from '@includes/navbar';

import * as S from '@includes/text';

import DefaultLayout from '@layouts/default_template';

export default function Home(props: { projects: Array<object> }) {
  return (
    <DefaultLayout title="Home">
      <Section id={'heading'}>
        <div style={{ textAlign: 'center' }}>
          <S.Heading>Hello there 😎</S.Heading>
          <S.SubHeading>
            I'm Carlos, a Web Developer working with Javascript, React.js, and
            Node.js!
          </S.SubHeading>
        </div>
      </Section>
      <Navbar />
      <Section id={'portfolio'}>
        {props.projects.map((project: any, index: number) => {
          return (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              github={project.github}
              link={project.url}
              imageUrl={project.img}
            />
          );
        })}
      </Section>
      <Section id="contact">
        <S.Heading>Get in touch</S.Heading>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ContactCard></ContactCard>
          <ContactCard></ContactCard>
          <ContactCard></ContactCard>
        </div>
      </Section>
    </DefaultLayout>
  );
}

type Project = {
  title: string;
  tags: string[];
  description: string;
  url: string;
  github: string;
  img: string;
};

export const getStaticProps: GetStaticProps = async () => {
  const token = process.env.CONTENTFUL_ACCESS_TOKEN;
  const spaceId = process.env.CONTENTFUL_SPACE_ID;
  const url = `https://cdn.contentful.com/spaces/${spaceId}/entries?access_token=${token}`;

  const response = await fetch(url);
  const data = await response.json();
  const projectListRaw = data.items;
  const imageListRaw = data.includes.Asset;

  let projects: Array<object> = projectListRaw.map((itemProject: any) => {
    let project: Project;
    const field = itemProject.fields;
    const title = field.title;

    const ImgUrl = (givenTitle: string, givenImageArray: any) => {
      let imageUrl: string = '';

      givenImageArray.forEach((image: any) => {
        givenTitle === image.fields.title
          ? (imageUrl = `${image.fields.file.url}`)
          : '';
      });

      return imageUrl;
    };

    project = {
      title: field.title,
      tags: field.tags,
      description: field.description,
      url: field.url || '',
      github: field.github || '',
      img: `${ImgUrl(title, imageListRaw)}`,
    };
    return project;
  });

  return {
    props: {
      projects,
    },
  };
};
