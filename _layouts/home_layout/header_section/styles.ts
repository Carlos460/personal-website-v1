import styled from 'styled-components';

export const Header = styled.section`
  padding: 0px 15% 0px;
  min-height: 100vh;
  background-color: var(--dark-secondary);
  /* background-image: url(/fall.jpg);
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 1000px) {
    justify-content: flex-start;
    flex-direction: column;
  }
`;

export const HeaderContent = styled.div`
  width: 40%;
  height: 480px;
  margin: auto 0px;
  z-index: 5;
  @media (max-width: 1000px) {
    width: 100%;
    margin: auto;
  }
`;
export const TitleContainer = styled.div`
  width: 100%;
  text-align: left;
  color: white;
  & > h1 {
    font-size: 44.8px;
    margin: 16px 0px;
  }
  & > h2 {
    font-family: 'Merriweather', serif;
  }
  @media (max-width: 1000px) {
    text-align: center;
  }
`;
export const LogoLinkContainer = styled.div`
  margin: 16px 0px;
  width: 100%;
  display: flex;
`;

interface LogoLinkProps {
  logo: string;
  yShift: string;
}

export const LogoLink = styled.a<LogoLinkProps>`
  height: 32px;
  width: 32px;
  margin: 0px 48px 0px 0px;
  background-image: ${(props) => props.logo};
  background-size: cover;
  filter: invert(100%);
  -webkit-filter: invert(100%);
  transform: translateY(${(props) => props.yShift});
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 1000px) {
    margin: 0px auto;
  }
`;

export const ButtonContainer = styled.div`
  margin: 32px auto;
  display: flex;
  @media (max-width: 1000px) {
    justify-content: center;
  }
`;
export const HeaderButton = styled.button`
  background-color: var(--orange);
  text-align: center;
  color: white;
  margin: 0.5px 0px;
  width: 160px;
  height: 40px;
  border: none;
  border-radius: 1.6px;
  outline: none;
  font-weight: bold;
  transition: box-shadow 0.2s ease;
  &:hover {
    cursor: pointer;
    border: solid 2px transparent;
    /* box-shadow: 0px 0px 10px 0.1px var(--orange); */
  }
  &:active {
    box-shadow: none;
  }
`;
