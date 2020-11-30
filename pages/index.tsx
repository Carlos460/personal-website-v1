import HomepageLayout from '@layouts/homepage_layout/index.tsx'
import { GetStaticProps } from 'next';
import PortfolioSection from '@layouts/homepage_layout/portfolio_section'

export default function Home(props: { projects: Array<object>, imageListRaw: any }) {
  return (
    <HomepageLayout>
      <PortfolioSection projectList={props.projects} />
    </HomepageLayout>
  );
}

type Project = {
  title: string
  tags: string[]
  description: string
  url: string
  github: string
  img: string
}

export const getStaticProps: GetStaticProps = async () => {

  const token = process.env.CONTENTFUL_ACCESS_TOKEN;
  const spaceId = process.env.CONTENTFUL_SPACE_ID;
  const url = `https://cdn.contentful.com/spaces/${spaceId}/entries?access_token=${token}`;

  const response = await fetch(url);
  const data = await response.json();
  const projectListRaw = data.items;
  const imageListRaw = data.includes.Asset;

  let projects: Array<object> = projectListRaw.map((item: any) => {
    let project: Project;
    const field = item.fields;
    const title = field.title;

    const ImgUrl = (givenTitle: string, givenImageArray: any) => {
      let imageUrl: string = '';

      givenImageArray.forEach((image: any) => {
        givenTitle === image.fields.title ? imageUrl = `${image.fields.file.url}` : '';
      });

      return imageUrl;
    }

    project = {
      title: field.title,
      tags: field.tags,
      description: field.description,
      url: field.url || '',
      github: field.github || '',
      img: `${ImgUrl(title, imageListRaw)}`
    }
    return project;
  });

  return {
    props: {
      projects,
      imageListRaw
    }
  }
}
