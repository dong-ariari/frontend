import btn from "../../assets/icons/miniSearch.svg";

import * as S from "./miniSearch.styles";

export default function MiniSearch({ onClick, text = "default text if input doesn't exists" }) {
  return (
    <S.Layer onClick={onClick}>
      <S.Placeholder>{text}</S.Placeholder>
      <img src={btn} alt="" />
    </S.Layer>
  );
}
