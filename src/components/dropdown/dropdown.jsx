import { useEffect, useState } from "react";
import * as S from "./dropdown.styles";
import dropBtn from "../../assets/icons/dropBtn.png";
import dropBtnA from "../../assets/icons/dropBtn-a.png";
import { DUMMY_SPREAD } from "../../data/dummy/dropdown";
export default function DropDown({title, handleSpread}) {

  return (
    <S.Container>
      <S.Head
        $active={true}
        $isOpen={isOpen.depart}
        onClick={handleSpread}
      >
        <span>
          {selected.depart === null
            ? title
            : selected.depart.text}
        </span>
        <img src={dropBtnA} />
      </S.Head>

      {spreadData &&
        isOpen.depart &&
        spreadData.depart.map((item) => (
          <S.Spread onClick={() => handleDepartSelect(item)} key={item.id}>
            {item.text}
          </S.Spread>
        ))}
    </S.Container>
  );
}
