import * as S from "./search.styles";
import btn from "../../assets/icons/searchBtn.png";

export default function Search({placeholder, onSearch}) {
  function handleSubmit(e) {
    e.preventDefault();
    onSearch(e.target[0].value); 
  }
  return (
    <S.Container onSubmit={handleSubmit}>
      <S.Input type="text" placeholder={placeholder} />
      <S.Button type="submit" $url={btn}></S.Button>
    </S.Container>
  );
}
