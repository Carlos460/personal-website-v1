import { setLazyProp } from 'next/dist/next-server/server/api-utils';
import styled from 'styled-components';

export const ContactCard = styled.div`
  display: flex;
  width: 650px;
  border-radius: 5px;
  background-color: var(--dark-secondary);
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  &::hover {
    & + div {
      opacity: 1;
    }
  }
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const ToolTip = styled.div`
  position: relative;
  &::after {
    content: 'Copy Email';
    position: absolute;
    opacity: 0;
    top: -20px;
    right: 0;
    left: 0;
    margin: 0px auto;
    z-index: 10;
    text-align: center;
    width: 120px;
    height: 25px;
    padding-top: 8px;
    border-radius: 5px;
    background-color: var(--light);
    transition: all 0.2s ease-out;
  }
`;

export const TitleContainer = styled.div`
  width: 50%;
  display: flex;
`;

export const Title = styled.div`
  margin: auto;
  color: var(--light);
`;

export const ContactList = styled.div`
  border-left: var(--light) 2px solid;
  width: 50%;
`;

export const ContactBar = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  width: 100%;
  height: 75px;
  display: flex;
  cursor: pointer;
  transition: background-color 0.3s ease-out, box-shadow 0.5s ease;
  &:hover {
    background-color: var(--dark-light);
    box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.9);
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  width: 75px;
  height: 75px;
`;

export const Logo = styled.img`
  margin: auto;
  width: 50%;
  height: 50%;
`;

export const ContactLink = styled.h4`
  color: var(--light);
  margin: auto 5px;
  text-decoration: none;
  transition: color 0.2s ease-out;
`;
