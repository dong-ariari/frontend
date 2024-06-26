import { useEffect, useState } from "react";
import * as S from "./dropdown.styles";
import dropBtn from "../../assets/icons/dropBtn.svg";
import dropBtnA from "../../assets/icons/dropBtn-a.svg";
export default function DropDown({
  title,
  handleSpread,
  handleSelect,
  spreadData,
  state,
  isBig,
}) {
  return (
    <S.Container>
      <S.Head
        $isBig={isBig}
        $active={state.active}
        $isOpen={state.isOpen}
        onClick={handleSpread}
      >
        <S.Text>{state.selected === null ? title : state.selected.text}</S.Text>

        <img src={state.active ? dropBtnA : dropBtn} />
      </S.Head>
      <S.Dropdown $isOpen={state.isOpen}>
        {spreadData &&
          state.isOpen &&
          spreadData.map((item) => (
            <S.Spread onClick={() => handleSelect(item)} key={item.id}>
              {item.text}
            </S.Spread>
          ))}
      </S.Dropdown>
    </S.Container>
  );
}
