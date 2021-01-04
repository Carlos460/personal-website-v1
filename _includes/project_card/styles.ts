import styled from 'styled-components';

export const ProjectCardContainer = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: row;
  transition: transform 0.2s ease;

  margin: 48px auto 100px;
  @media (max-width: 1600px) {
    flex-direction: column;
  }
`;
export const ProjectCardImage = styled.div<{ customImage?: string }>`
  background-image: url(${(props) => props.customImage});
  background-size: cover;
  height: 400px;
  width: 560px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  @media (max-width: 720px) {
    width: 100%;
  }
  @media (max-width: 1600px) {
    margin: 0px auto;
  }
`;
// Content
export const ProjectCardContent = styled.div`
  position: relative;

  padding: 32px;
  width: 560px;
  height: 400px;
  background-color: var(--dark-secondary);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media (max-width: 720px) {
    height: auto;
    width: 100%;
  }
  @media (max-width: 1600px) {
    margin: 0px auto;
  }
`;
export const ProjectCardTitle = styled.h1`
  color: var(--white);
  font-size: 32px;
`;
export const DesccriptionContainer = styled.div`
  margin: 30px 0px 0px;
  color: var(--white-secondary);
  font-size: 16px;
  line-height: 25px;
  @media (max-width: 720px) {
    font-size: 14.4px;
    margin-bottom: 50px;
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
  padding: 9px 0px;
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
