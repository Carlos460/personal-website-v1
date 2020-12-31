// Import Styles
import * as S from './style';

export default function Tag(props: { children: string }) {
  return (
    <S.TagComponent>
      <S.TagName>{props.children}</S.TagName>
    </S.TagComponent>
  );
}
