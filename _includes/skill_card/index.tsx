import * as S from './style';

export default function SkillCard(props: any) {
  return (
    <>
      <S.Container>
        <S.ImageWrapper>
          <S.ImageLogo
            invertValue={props.invert || 0}
            offSet={props.translateY}
            src={props.imageUrl}
          />
        </S.ImageWrapper>

        <S.DescripotionWrapper>{props.children}</S.DescripotionWrapper>
      </S.Container>
    </>
  );
}
