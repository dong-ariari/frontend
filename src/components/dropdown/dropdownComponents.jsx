import { useEffect, useState } from "react";
import DropDown from "./dropdown";
import * as S from "./dropdown.styles";
import {
  DUMMY_DEPART,
  DUMMY_MAJOR0,
  DUMMY_MAJOR1,
} from "../../data/dummy/dropdown";

export default function DropdownComponents() {
  const [departSpread, setDepartSpread] = useState();
  const [majorSpread, setMajorSpread] = useState();

  const [departState, setDepartState] = useState({
    active: true,
    isOpen: false,
    selected: null,
  });
  const [majorState, setMajorState] = useState({
    isActive: false,
    isOpen: false,
    selected: null,
  });

  useEffect(() => {
    // API: GET depart data
    setDepartSpread(DUMMY_DEPART);
  }, []);

  function handleDepartSpread() {}
  function handleMajorSpread(departId) {
    // API: GET(departId) major data
    if (departId === 0) {
      setMajorSpread(DUMMY_MAJOR0);
    } else if (departId == 1) {
      setMajorSpread(DUMMY_MAJOR1);
    }
  }

  function handleDepartSelect() {}
  function handleMajorSelect() {}

  return (
    <S.Layer>
      <DropDown
        title={"단과대학을 선택해주세요"}
        handleSpread={handleDepartSpread}
        handleSelect={(item) => handleDepartSelect(item)}
        
        state={departState}

        spreadData={departSpread}
      />
      <DropDown
        title={"학과를 선택해주세요"}
        handleSpread={handleMajorSpread}
        handleSelect={(item) => handleMajorSelect(item)}
        
        state={majorState}
        spreadData={majorSpread}
      />
    </S.Layer>
  );
}
