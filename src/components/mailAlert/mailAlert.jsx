import * as S from "./mailAlert.styles";
import loveLetter from "../../assets/images/love-letter.svg";
export default function MailAlert({
  placeholder = "메일을 성공적으로 보냈어요!",
}) {
  return (
    <S.Layer>
      <S.Icon src={loveLetter} />
      {placeholder}
    </S.Layer>
  );
}
