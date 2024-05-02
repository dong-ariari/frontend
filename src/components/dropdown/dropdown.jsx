import { useEffect, useState } from "react";
import * as S from "./dropdown.styles";
import dropBtn from "../../assets/icons/dropBtn.png";
import dropBtnA from "../../assets/icons/dropBtn-a.png";
import {DUMMY_SPREAD } from "../../data/dummy/dropdown";
export default function DropDown() {
  const [selected, setSelected] = useState({
    depart: null,
    major: null,
  });
  const [spreadData, setSpreadData] = useState(null);
  const [isOpen, setIsOpen] = useState({ depart: false, major: false });

  useEffect(() => {
    // GET : school list
    setSpreadData(DUMMY_SPREAD);
  }, []);

  function handleDepartSpread() {
    console.log("is opened");
    const updated = { ...isOpen, depart: !isOpen.depart };
    setIsOpen(updated);
  }
  function handleMajorSpread() {}

  return (
    <S.Layer>
      <S.Container>
        <S.Head $active={true} onClick={() => handleDepartSpread()}>
          {selected.depart === null
            ? "단과대학을 선택해주세요"
            : selected.depart}
          <img src={dropBtnA} />
        </S.Head>

        
        {spreadData &&
          isOpen.depart &&
          spreadData.depart.map((item) => (
            <S.Spread key={item.id}>{item.text}</S.Spread>
          ))}
      </S.Container>

      <S.Container>
        <S.Head
          $active={selected.depart !== null}
          onClick={() => handleMajorSpread()}
        >
          {selected.major === null ? "학과를 선택해주세요" : selected.major}
          <img src={dropBtn} />
        </S.Head>
      </S.Container>
    </S.Layer>
  );
}
