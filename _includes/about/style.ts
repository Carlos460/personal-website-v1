import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  color: var(--light-secondary);
`;

export const Wrap = styled.div`
  position: relative;

  margin: auto;
  padding-bottom: 100px;
  width: 700px;
  @media (max-width: 850px) {
    width: 100%;
    padding: 10px 20px 100px;
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
  & > * {
    @media (max-width: 720px) {
      margin: 0px auto;
      width: 80%;
    }
  }
`;

interface ButtonProps {
  theme: {
    border: string;
    bgColor: string;
    textColor: string;
  };
}

export const Button = styled.button<ButtonProps>`
  border: ${(props) => props.theme.border};
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  display: block;
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
  @media (max-width: 720px) {
    width: 100%;
  }
`;

export const SkillsLinkContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SkillsLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: var(--light);
  text-align: center;
  width: 75px;
  font-size: 20px;
  border-bottom: 2px solid white;
  padding: 2px;
`;
