import { useEffect, useState } from "react";
import * as S from "./dropdown.styles";
import dropBtn from "../../assets/icons/dropBtn.png";
import dropBtnA from "../../assets/icons/dropBtn-a.png";
import { DROPDOWN_DATA, DUMMY_SPREAD } from "../../data/components/dropdown";
export default function DropDown() {
  const [selected, setSelected] = useState(DROPDOWN_DATA);
  const [spreadData, setSpreadData] =  useState(null); 
  
    useEffect(()=>{
        // GET : school list
        setSpreadData(DUMMY_SPREAD); 
    }, []); 

    function handleDepartSpread(){}; 
    function handleMajorSpread(){}; 
  
  return (
    <S.Layer>
      <S.Container >
        <S.Head $active={true} onClick={() => handleDepartSpread()}>
          {selected.depart === null
            ? "단과대학을 선택해주세요"
            : selected.depart}
          <S.Icon src={dropBtnA} />
        </S.Head>
        {spreadData && spreadData.depart.map((item) => (
          <S.Spread key={item.id}>{item.text}</S.Spread>
        ))}
      </S.Container>

      <S.Container >
        <S.Head $active={selected.depart !== null} onClick={() => handleMajorSpread()}>
          {selected.major === null ? "학과를 선택해주세요" : selected.major}
          <S.Icon src={dropBtn} />
        </S.Head>
      </S.Container>
    </S.Layer>
  );
}
