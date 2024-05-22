import btn from "../../assets/icons/miniSearch.svg";

import * as S from "./miniSearch.styles";

export default function MiniSearch({ onClick, text }) {
  return (
    <S.Layer onClick={onClick}>
      <S.Placeholder>{text}</S.Placeholder>
      <img src={btn} alt="" />
    </S.Layer>
  );
}
