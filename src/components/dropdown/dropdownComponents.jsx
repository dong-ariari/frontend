import { useState } from "react";
import DropDown from "./dropdown";
import * as S from "./dropdown.styles";

export default function DropdownComponents() {
    
  function handleDepartSpread() {}
  function handleMajorSpread() {}
  return (
    <S.Layer>
      <DropDown
        handleSpread={handleDepartSpread}
        title={"단과대학을 선택해주세요"}
        isOpen={()=>{}}
        selected={{text: 'asd'}}
        spreadData={''}
      />
      <DropDown
        handleSpread={handleMajorSpread}
        title={"학과를 선택해주세요"}
        isOpen={()=>{}}
        selected={{text: 'asd'}}
        spreadData={''}
      />
    </S.Layer>
  );
}
