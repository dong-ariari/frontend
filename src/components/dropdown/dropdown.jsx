import { useEffect, useState } from "react";
import * as S from "./dropdown.styles";
import dropBtn from "../../assets/icons/dropBtn.png";
import dropBtnA from "../../assets/icons/dropBtn-a.png";
export default function DropDown({
  title,
  handleSpread,
  isOpen,
  selected,
  spreadData,
  active, 
  handleSelect
}) {
  return (
    <S.Container>
      <S.Head $active={active} $isOpen={isOpen} onClick={handleSpread}>
        <span>{selected === null ? title : selected.text}</span>
        <img src={dropBtnA} />
      </S.Head>

      {spreadData &&
        isOpen &&
        spreadData.map((item) => (
          <S.Spread onClick={() => handleSelect(item)} key={item.id}>
            {item.text}
          </S.Spread>
        ))}
    </S.Container>
  );
}
