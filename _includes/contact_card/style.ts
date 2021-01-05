import styled from 'styled-components';

export const ContactCard = styled.div`
  padding: 30px 20px;
  width: 450px;
  border-radius: 5px;
  background-color: var(--dark-secondary);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  @media (max-width: 800px) {
    width: 100%;
  }
`;
export const ContactingName = styled.h1`
  font-size: 32px;
  padding: 20px 0px;
  margin-bottom: 50px;
  text-align: center;
  color: var(--light);
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
  &:hover {
    &::after {
      opacity: 1;
      top: -30px;
    }
  }
`;

export const ContactBar = styled.div`
  width: 100%;
  margin: 15px 0px;
  display: flex;
`;

export const ContactLink = styled.a`
  width: 100%;
  border-bottom: solid var(--light-secondary) 2px;
  text-align: center;
  padding: 2px 18px;
  color: var(--light);
  margin: 0.2rem 1rem;
  text-decoration: none;
  transition: color 0.2s ease-out;
  &:hover {
    color: var(--secondary);
    cursor: pointer;
  }
`;
