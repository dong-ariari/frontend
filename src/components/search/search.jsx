import * as S from "./search.styles";

import btn from "../../assets/icons/searchBtn.png";
export default function Search() {
    function handleSubmit(e){
        e.preventDefault();
        console.log(e.target.value)

    }
  return (
    <S.Container onSubmit={handleSubmit}>
      <S.Input placeholder="관심있는 동아리를 찾을 수 있어요" />
      <S.Button type="submit" $url={btn}></S.Button>
    </S.Container>
  );
}

