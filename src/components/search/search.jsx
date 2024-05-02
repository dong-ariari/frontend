import * as S from "./search.styles";

import btn from "../../assets/icons/searchBtn.png";
export default function Search() {
  return (
    <S.Container>
      <S.Input placeholder="관심있는 동아리를 찾을 수 있어요" />
      <img src={btn} alt="search button" />
    </S.Container>
  );
}
