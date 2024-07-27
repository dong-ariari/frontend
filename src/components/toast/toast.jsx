import * as S from "./toast.style";
import icon from "../../assets/images/love-letter.svg";
import { useEffect } from "react";

export default function Toast({ placeholder, visible, setVisible }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, [visible]);

  return (
    <S.Layer $visible={visible}>
      <S.Icon src={icon} />
      {placeholder}
    </S.Layer>
  );
}
