import { setLazyProp } from 'next/dist/next-server/server/api-utils';
import styled from 'styled-components';

export const ContactCard = styled.div`
  display: flex;
  width: 650px;
  margin: 250px auto 50px;
  background-color: var(--dark-secondary);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  &::hover {
    & + div {
      opacity: 1;
    }
  }
  @media (max-width: 700px) {
    width: 100%;
    flex-direction: column;
    background-color: transparent;
    box-shadow: none;
    margin: 50px auto;
  }
`;

export const TitleContainer = styled.div`
  width: 50%;
  display: flex;
  @media (max-width: 700px) {
    padding: 50px 0px;
    width: 100%;
  }
`;

export const Title = styled.div`
  margin: auto;
  text-align: center;
  color: var(--light);
  & > h1 {
    line-height: 40px;
  }
`;

export const ContactList = styled.div`
  border-left: var(--light) 2px solid;
  overflow: hidden;
  width: 50%;
  @media (max-width: 700px) {
    display: flex;
    justify-content: space-around;
    padding: 10px 0px;
    width: 100%;
    border: none;
  }
`;

export const ContactBar = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  width: 100%;
  height: 75px;
  display: flex;
  cursor: pointer;
  transition: background-color 0.2s ease-in, box-shadow 0.05s ease;
  &:hover {
    background-color: var(--dark-light);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.9);
  }
  &:active {
    background-color: var(--dark-light);
    box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.9);
  }
  @media (max-width: 700px) {
    width: auto;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  width: 75px;
  height: 75px;
  @media (max-width: 700px) {
    flex-direction: row;
  }
`;

export const Logo = styled.img`
  margin: auto;
  width: 50%;
  height: 50%;
`;

export const ContactLink = styled.p`
  color: var(--light);
  margin: auto 5px;
  text-decoration: none;
  transition: color 0.2s ease-out;
  @media (max-width: 700px) {
    display: none;
  }
`;
