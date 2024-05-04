import * as S from "./search.styles";

import btn from "../../assets/icons/searchBtn.png";
import { useState } from "react";
export default function Search({placeholder, onSearch}) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target[0].value)
    onSearch(e.target[0].value); 
    
  }
  return (
    <S.Container onSubmit={handleSubmit}>
      <S.Input type="text" placeholder={placeholder} />
      <S.Button type="submit" $url={btn}></S.Button>
    </S.Container>
  );
}
