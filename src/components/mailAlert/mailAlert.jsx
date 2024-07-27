import * as S from "./mailAlert.styles";
import loveLetter from "../../assets/images/love-letter.svg";
import { useEffect } from "react";
export default function MailAlert({
  visible,
  setVisible,
  placeholder = "메일을 성공적으로 보냈어요!",
}) {
  console.log(visible)
  useEffect(() => {
    
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, [visible]);
  return (
    <S.Layer $visible={visible}>
      <S.Icon src={loveLetter} />
      {placeholder}
    </S.Layer>
  );
}
