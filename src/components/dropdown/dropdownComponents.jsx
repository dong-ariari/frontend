import { useEffect, useState } from "react";
import DropDown from "./dropdown";
import * as S from "./dropdown.styles";
import {
  DUMMY_DEPART,
  DUMMY_MAJOR0,
  DUMMY_MAJOR1,
} from "../../data/dummy/dropdown";

export default function DropdownComponents() {
  // API로 받아오는 대학, 학과 데이터들
  const [departSpread, setDepartSpread] = useState();
  const [majorSpread, setMajorSpread] = useState();

  // dropDown 활성화 여부, 열렸는지, 선택된 아이템 정보
  const [departState, setDepartState] = useState({
    active: true,
    isOpen: false,
    selected: null,
  });
  const [majorState, setMajorState] = useState({
    active: false,
    isOpen: false,
    selected: null,
  });

  useEffect(() => {
    // API: GET depart data
    setDepartSpread(DUMMY_DEPART);
  }, []);

  function handleDepartSpread() {
    const updated = { ...departState, isOpen: !departState.isOpen };
    setDepartState(updated);
  }
  function handleMajorSpread() {
    // API: GET(departId) major data
    if (departState.selected === null){return}

    if (departState.selected.id === 0) {
      setMajorSpread(DUMMY_MAJOR0);
    } else if (departState.selected.id == 1) {
      setMajorSpread(DUMMY_MAJOR1);
    }

    const updated = { ...majorState, isOpen: !majorState.isOpen };
    setMajorState(updated);
  }

  function handleDepartSelect(item) {
    const updatedDepart = { ...departState, selected: item, isOpen: false };
    setDepartState(updatedDepart);

    const updatedMajor = { ...majorState, active: true, selected: null };
    setMajorState(updatedMajor);
    setMajorSpread(null);
  }
  function handleMajorSelect(item) {
    const updated = { ...majorState, selected: item, isOpen: false };
    setMajorState(updated);
  }

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
