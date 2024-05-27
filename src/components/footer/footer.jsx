import * as S from "./footer.styles";

export default function Footer({ text, text2 }) {
  return (
    <S.Layer>
      <S.Text>{text}</S.Text>
      <S.Text>{text2}</S.Text>
    </S.Layer>
  );
}
