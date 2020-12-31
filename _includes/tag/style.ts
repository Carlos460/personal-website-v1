import styled from 'styled-components';

// Tag Component
export const TagContainer = styled.section`
  width: 100%;
  margin-bottom: 18px;
  display: flex;
  flex-wrap: wrap;
`;

export const TagComponent = styled.div`
  height: 20px;
  min-width: 80px;
  text-align: center;
  padding: 2px 10px 0px 0px;
  margin-top: 8px;
`;
export const TagName = styled.p`
  color: var(--blue-light);
  font-weight: bold;
  letter-spacing: 1.6px;
  font-size: 12px;
`;
