import { useEffect, useState } from "react";
import DropDown from "./dropdown";
import * as S from "./dropdown.styles";

export default function DropdownComponents({ dropdown, dropdown2 }) {
  return (
    <S.Layer>
      <DropDown {...dropdown} />
      {dropdown2 && <DropDown {...dropdown2} />}
    </S.Layer>
  );
}
