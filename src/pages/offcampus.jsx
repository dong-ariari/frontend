import { useEffect, useState } from "react";
import DropdownComponents from "../components/dropdown/dropdownComponents";
import Input from "../components/input/input";
import {
  DUMMY_DEPART,
  DUMMY_FIELD,
  DUMMY_REGION,
} from "../data/dummy/dropdown";
import { useDropDown, useDropDown2 } from "../hooks/useDropdown";
import Button from "../components/button/button";
import Search from "../components/search/search";
import Textarea from "../components/textarea/textarea";
import ToggleBtn from "../components/toggleBtn/toggleBtn";

const Offcampus = () => {
  // 드롭다운은 전체 탭 선택시 합께 디스플레이 되지 않아 재사용 가능
  const field = useDropDown("분야를 선택해주세요");
  const region = useDropDown("지역을 선택해주세요");
  const { dropdown: depart, dropdown2: major } = useDropDown2(
    "단과대학을 선택해주세요",
    "학과를 선택해주세요"
  );

  useEffect(() => {
    // GET
    field.setSpreadData(DUMMY_FIELD);
    region.setSpreadData(DUMMY_REGION);
    depart.setSpreadData(DUMMY_DEPART);
  }, []);

  return (
    <>
      <div style={{display: 'flex', gap: '50px'}}>
        {/* 중앙동아리(단일 드롭다운을 사용하는 경우) = useDropdown * 1 */}
        <DropdownComponents dropdown={field} dropdown2={null} />
        {/* 단과동아리(2개 드롭다운이 연결되어 동작하는 경우) = useDropdown2 */}
        <DropdownComponents dropdown={depart} dropdown2={major} />
        {/* 연합동아리(드롭다운 간 연관 관계가 없이 2개 사용하는 경우) = useDropdown * 2  */}
        <DropdownComponents dropdown={field} dropdown2={region} />
      </div>

      <div style={{ backgroundColor: "#ffe8fb", padding: 100 }}>
        <Input
          title={"동아리 이름"}
          placeholder={"동아리 이름을 입력해주세요"}
          isEdit={false}
          onValueChange={() => {}}
        />
        <Input
          title={"교내 동아리"}
          placeholder={"교내 동아리"}
          isEdit={true}
          onValueChange={() => {}}
        />
        <Textarea
          title={"소개글"}
          placeholder={"소개하고 싶은 내용을 입력해주세요"}
          isEdit={false}
          max={500}
        />
        <Textarea
          title={"소개글"}
          placeholder={"편집 가능한 상태"}
          isEdit={true}
          max={500}
        />
        <ToggleBtn
          title={"모집 현황"}
          btnContent1={"모집 중"}
          btnContent2={"모집 완료"}
          onToggle={() => {}}
        />
      </div>

      <div style={{ border: "solid 3px black", padding: "50px" }}>
        <Search
          placeholder="관심있는 동아리를 찾을 수 있어요"
          onSearch={(val) => {
            console.log(val);
          }}
        />
      </div>
    </>
  );
};

export default Offcampus;
