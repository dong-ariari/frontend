import { useEffect, useState } from "react";
import DropdownComponents from "../components/dropdown/dropdownComponents";
import Input from "../components/input/input";
import { DUMMY_CENTRAL, DUMMY_DEPART } from "../data/dummy/dropdown";
import { useDropDown, useDropDown2 } from "../hooks/useDropdown";

const Offcampus = () => {
  const central = useDropDown("분야를 선택해주세요");
  const { dropdown: depart, dropdown2: major } = useDropDown2(
    "단과대학을 선택해주세요",
    "학과를 선택해주세요"
  );

  useEffect(() => {
    central.setSpreadData(DUMMY_CENTRAL);
    depart.setSpreadData(DUMMY_DEPART)
  }, []);


  return (
    <>
      {/* <DropdownComponents dropdown={central} dropdown2={null} /> */}

      <DropdownComponents dropdown={depart} dropdown2={major} />

      {/* <DropdownComponents dropdown={central} dropdown2={null} /> */}

      <div style={{ backgroundColor: "#ffe8fb", padding: 100 }}>
        <Input
          title={"동아리 이름"}
          placeholder={"동아리 이름을 입력해주세요"}
        />
        <Input title={"교내 동아리"} placeholder={"교내 동아리"} />
      </div>
    </>
  );
};

export default Offcampus;
