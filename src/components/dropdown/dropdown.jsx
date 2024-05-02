import { useState } from "react";
import * as S from "./dropdown.styles";

export default function DropDown({ data }) {
  const [dropdownData, setDropDownData] = useState(data);
  console.log(dropdownData.depart !== null);

  function handleSpread() {}

  return (
    <S.Layer>
      <S.Container $active={true}>
        <S.Head onClick={() => handleSpread()}>
          {dropdownData.depart === null
            ? "단과대학을 선택해주세요"
            : dropdownData.depart}
        </S.Head>
      </S.Container>

      <S.Container $active={dropdownData.depart !== null}>
        <S.Head>
          {dropdownData.majior === null
            ? "학과를 선택해주세요"
            : dropdownData.majior}
        </S.Head>
      </S.Container>
    </S.Layer>
  );
}
