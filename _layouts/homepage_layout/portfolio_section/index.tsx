// Import Components
import ProjectCard from '@includes/project_card/index'
import Tag from '@includes/project_card/tag'
// Import Styled Components
import { ProjectContainer, Portfolio, ProjectShowcaseTitle } from './styles'


const projectCardData = {
  punity: {
    title: `P'Unity`,
    github: ``,
    link: `https://punity.de/`,
    description: `P'Unity is a unique Online Community revolving around Computer Science. 
    Developed for performance, live comments, intelligent code engines, and more. With a 
    small team of four, we are working together to bring a fully polished web application. 
    I've made use of the styled-components library to implement the modern design for P'Unity.
    `,
  },
  taskit: {
    title: `Task-It`,
    github: `https://github.com/Carlos460/Task-it`,
    link: ``,
    description: `To-Do App is a full-stack application made to store user data.
    Made with full CRUD functionality and user input validation.
    `,
  },
  personalwebsite: {
    title: `Web Portfolio`,
    github: `https://github.com/Carlos460/personal-website`,
    link: `https://carlosflores.vercel.app/`,
    description: `This Project is my first web portfolio showcasing my latest work! 
    I used this opportunity to learn some Typescript fundamentals and implement them 
    while developing this web app. Utilizing Next.js, a React.js framework, I was able 
    to learn the ins and outs to create a Responsive Front-End. I also made use of the Framer 
    Motion to add subtle animations to my buttons. Developing this took me out of my comfort 
    zone by making me use tools that I'm not comfortable with and learn along the way.
    `,
  },
  moonbase: {
    title: `Moon Base`,
    github: `https://github.com/esteban0829/nodejs_class_apply_webpage`,
    link: ``,
    description: `Moonbase was a small duo team project built to help people 
    collaborate with like-minded people. I developed the front end using vanilla javascript, 
    HTML, and CSS. Coordinated with my team member to bring together a functional full-stack 
    application. Using the Fetch API I was able to deliver data to our rest API and store it in an SQL database.  
    `,
  },
  tenniswebsite: {
    title: `Tennis Academy`,
    github: ``,
    link: ``,
    description: `My first application using HTML and CSS together to make a static website.
    `,
  },
};

function PortfolioSection() {
  return (
    <>
      <Portfolio id='portfolio'>
        <ProjectShowcaseTitle>
          <h1>Projects that have helped me grow as a Developer</h1>
        </ProjectShowcaseTitle>
        <ProjectContainer>
          <ProjectCard
            title={projectCardData.punity.title}
            imageUrl={`/img/punity.png`}
            description={projectCardData.punity.description}
            github={projectCardData.punity.github}
            link={projectCardData.punity.link}
            tags={
              <>
                <Tag>Front-End</Tag>
                <Tag>React.js</Tag>
                <Tag>Styled Components</Tag>
              </>
            }
          />
          <ProjectCard
            title={projectCardData.personalwebsite.title}
            imageUrl={`/img/portfolio.png`}
            description={projectCardData.personalwebsite.description}
            github={projectCardData.personalwebsite.github}
            link={projectCardData.personalwebsite.link}
            tags={
              <>
                <Tag>Next.js</Tag>
                <Tag>TypeScript</Tag>
                <Tag>Styled Components</Tag>
              </>
            }
          />
          <ProjectCard
            title={projectCardData.taskit.title}
            imageUrl={`/img/taskit.png`}
            description={projectCardData.taskit.description}
            github={projectCardData.taskit.github}
            link={projectCardData.taskit.link}
            tags={
              <>
                <Tag>Express.js</Tag>
                <Tag>Ejs Engine</Tag>
                <Tag>MongoDB</Tag>
                <Tag>Fetch API</Tag>
              </>
            }
          />
          <ProjectCard
            title={projectCardData.moonbase.title}
            imageUrl={`/img/moonbase.png`}
            description={projectCardData.moonbase.description}
            github={projectCardData.moonbase.github}
            link={projectCardData.moonbase.link}
            tags={
              <>
                <Tag>Express.js</Tag>
                <Tag>MySQL</Tag>
                <Tag>Fetch API</Tag>
              </>
            }
          />
          <ProjectCard
            title={projectCardData.tenniswebsite.title}
            imageUrl={`/img/tennis.png`}
            description={projectCardData.tenniswebsite.description}
            github={projectCardData.tenniswebsite.github}
            link={projectCardData.tenniswebsite.link}
            tags={
              <>
                <Tag>HTML</Tag>
                <Tag>CSS</Tag>
              </>
            }
          />
        </ProjectContainer>
      </Portfolio>
    </>
  );
}

export default PortfolioSection;