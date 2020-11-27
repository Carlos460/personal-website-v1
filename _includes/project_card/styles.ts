import styled from 'styled-components'

interface ImageUrlProps {
    image: string;
}

export const ProjectCardContainer = styled.section`
    position: relative;
    display: flex;
    flex-direction: row;
    margin: 3rem auto;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    @media (max-width: 1200px){
        flex-direction: column;
        justify-content: center;
    }
`
export const ProjectCardImage = styled.div<ImageUrlProps>`
    background-image: url(${props => props.image});
    background-size: cover;
    height: 25rem;
    width: 35rem;
    @media (max-width: 720px){
        width: 100%;
    }
`
// Content
export const ProjectCardContent = styled.div`
    position: relative;
    padding: 2rem;
    width: 35rem;
    height: 25rem;
    background-color: var(--blue-dark);
    @media (max-width: 720px){
        min-height: 30rem;
        width: 100%;
    }
`
export const ProjectCardTitle = styled.h1`
    color: white;
    font-size: 2rem;
`
export const DesccriptionContainer = styled.div`
    margin: 1rem 0rem;
    color: white;
    @media (max-width: 720px) {
        font-size: 0.9rem;
    }
`
// Button 
export const ButtonContainer = styled.div`
    position: absolute;
    width: 100%;
    bottom: 0rem;
    right: 0rem;
    display: flex;
    margin: 1rem;
    flex-direction: row-reverse;
    @media (max-width: 720px){
        justify-content: center;
        margin: 0.5rem 0rem;
    }
`

export const Button = styled.a`
    border: ${props => props.theme.border};
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.textColor};
    appearance: button;
    display: block;
    text-decoration: none;
    text-align: center;
    padding: 0.52rem 0rem;
    margin: 0.5rem 0.5rem 0.5rem;
    width: 8rem;
    height: 2.5rem;
    border-radius: 0.1rem;
    outline: none;
    font-weight: bold;
    &:hover {
        cursor: pointer;
    }
`
// Tag Component
export const TagContainer = styled.section`
    width: 100%;
    margin: 1rem 0rem;
    display: flex;
    flex-wrap: wrap;

`

export const TagComponent = styled.div`
    height: 1.8rem;
    min-width: 5rem;
    text-align: center;
    padding: 0.4rem 0.5rem;
    border-radius: 0.2rem;
    margin-right: 0.5rem;
    margin-top:0.5rem;
    background-color: var(--orange);
`
export const TagName = styled.p`
    color: white;
    font-weight: bold;
    letter-spacing:0.1rem;
    font-size: 0.8rem;
`
