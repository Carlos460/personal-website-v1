import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;

  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Conatiner = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0px auto;
  width: 50%;
`;

export const Title = styled.div`
  color: var(--light);

  & > h1 {
    font-size: 34px;
  }
`;
