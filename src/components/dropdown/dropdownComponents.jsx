import { useEffect, useState } from "react";
import DropDown from "./dropdown";
import * as S from "./dropdown.styles";

export default function DropdownComponents({ dropdown, dropdown2 }) {

  return (
    <S.Layer>
      <DropDown {...dropdown} />
      {dropdown2 && (
        <DropDown
          {...dropdown2}
          title={dropdown2.title2}
          handleSpread={dropdown2.handleSpread2}
          handleSelect={dropdown2.handleSelect2}
          spreadData={dropdown2.spreadData2}
          state={dropdown2.state2}
        />
      )}
    </S.Layer>
  );
}
