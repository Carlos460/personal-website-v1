import styled from 'styled-components';

export const ProjectCardContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: row;
  margin: 48px auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  @media (max-width: 1200px) {
    flex-direction: column;
    justify-content: center;
  }
`;
export const ProjectCardImage = styled.div<{ customImage?: string }>`
  background-image: url(${(props) => props.customImage});
  background-size: cover;
  height: 400px;
  width: 560px;
  @media (max-width: 720px) {
    width: 100%;
  }
`;
// Content
export const ProjectCardContent = styled.div`
  position: relative;
  padding: 32px;
  width: 560px;
  height: 400px;
  background-color: var(--blue-dark);
  @media (max-width: 720px) {
    min-height: 480px;
    width: 100%;
  }
`;
export const ProjectCardTitle = styled.h1`
  color: var(--white);
  font-size: 32px;
`;
export const DesccriptionContainer = styled.div`
  margin: 30px 0px 0px;
  color: white;
  font-size: 16px;
  line-height: 25px;
  @media (max-width: 720px) {
    font-size: 14.4px;
  }
`;
// Button
export const ButtonContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0px;
  right: 0px;
  display: flex;
  margin: 16px;
  flex-direction: row-reverse;
  @media (max-width: 720px) {
    justify-content: center;
    margin: 8px 0px;
  }
`;

interface ButtonProps {
  theme: {
    border: string;
    bgColor: string;
    textColor: string;
  };
}

export const Button = styled.a<ButtonProps>`
  border: ${(props) => props.theme.border};
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  display: block;
  appearance: button;
  text-decoration: none;
  text-align: center;
  padding: 8.32px 0px;
  margin: 8px 8px 8px;
  width: 128px;
  height: 40px;
  border-radius: 1.6px;
  outline: none;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;
