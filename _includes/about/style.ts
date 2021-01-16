import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  color: var(--light-secondary);
`;

export const Wrap = styled.div`
  margin: 50px auto;
  width: 800px;
  @media (max-width: 800px) {
    width: 100%;
    margin: 10px 10px;
  }
`;
