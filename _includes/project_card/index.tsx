
// Import Components
import Tag from './tag'

// Import Styles
import {Button, ButtonContainer, ProjectCardContainer, ProjectCardTitle,
        TagContainer, DesccriptionContainer,ProjectCardImage, ProjectCardContent} from './styles'

export default function ProjectCard(props){
    return(
        <ProjectCardContainer>
            <ProjectCardImage>
            </ProjectCardImage>
            <ProjectCardContent>
                <ProjectCardTitle>{props.title}</ProjectCardTitle>
                <TagContainer>
                    {props.tags}
                </TagContainer>
                <DesccriptionContainer>
                    {props.description}
                </DesccriptionContainer>
                <ButtonContainer>
                    <Button>Visit Webstie</Button>
                    <Button>View Code</Button>
                </ButtonContainer>
            </ProjectCardContent>
        </ProjectCardContainer>
    );
}