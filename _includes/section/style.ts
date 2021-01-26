import styled from 'styled-components';

interface SectionProps {
  bgColor?: string;
  bgImage?: string;
}

export const Container = styled.section<SectionProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 100px 0px;
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.bgColor};
  background-image: ${(props) => props.bgImage};
  background-position: center;
  background-size: cover;
`;
