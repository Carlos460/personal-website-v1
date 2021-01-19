import styled from 'styled-components';

export const Container = styled.div`
  margin: 10px;
  width: 125px;
  height: 150px;
  background-color: var(--dark-secondary);
  box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.2);
`;

export const ImageWrapper = styled.div`
  display: flex;
  height: 70%;
`;

interface ImageLogoProps {
  offSet: number;
  invertValue: number;
}

export const ImageLogo = styled.img<ImageLogoProps>`
  transform: translateY(${(props) => props.offSet}px);
  filter: invert(${(props) => props.invertValue});
  margin: auto;
  height: 75px;
  width: 75px;
`;

export const DescripotionWrapper = styled.div`
  height: 30%;
  color: var(--light);
  text-align: center;
`;
