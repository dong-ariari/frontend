import { useEffect, useState } from "react";
import * as S from "./dropdown.styles";
import dropBtn from "../../assets/icons/dropBtn.png";
import dropBtnA from "../../assets/icons/dropBtn-a.png";
export default function DropDown({
  title,
  handleSpread,
  handleSelect,
  spreadData,
  state,
}) {
  console.log(state);
  return (
    <S.Container>
      <S.Head
        $active={state.active}
        $isOpen={state.isOpen}
        onClick={handleSpread}
      >
        <span>{state.selected === null ? title : state.selected.text}</span>
        <img src={dropBtnA} />
      </S.Head>

      {spreadData &&
        state.isOpen &&
        spreadData.map((item) => (
          <S.Spread onClick={() => handleSelect(item)} key={item.id}>
            {item.text}
          </S.Spread>
        ))}
    </S.Container>
  );
}
