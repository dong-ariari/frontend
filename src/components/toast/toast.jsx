import * as S from "./toast.style";
import icon from "../../assets/images/love-letter.svg";

export default function Toast({ placeholder }) {
  return (
    <S.Layer>
      <S.Icon src={icon} />
      {placeholder}
    </S.Layer>
  );
}
