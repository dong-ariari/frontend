import { useState } from "react";
import Cards from "../../components/cards/cards";
import { DUMMY_CARD } from "../../data/dummy/cards";
import MainLayout from "../../layouts/mainLayout/mainLayout";
import Search from "../../components/search/search";
import DropdownComponents from "../../components/dropdown/dropdownComponents";
import * as S from "./all.styles";
import { useDropDown, useDropDown2 } from "../../hooks/useDropdown";
import SortTag from "../../components/tag/sortTag";
import { SORT_TAG_DATA } from "../../data/components/sortTag";
export default function All() {
  // type: 전체 | 교내 | 연합
  const [type, setType] = useState(1);
  function onTypeChange(type) {
    setType(type);
  }

  // searchActive: 검색 모달 활성화 여부
  const [searchActive, setSearchActive] = useState(false);
  // tag: 전체 | 교내 동아리 | 중앙 동아리 | 연합 동아리
  const [tag, setTag] = useState();

  // dropdowns
  const { dropdown: depart, dropdown2: major } = useDropDown2(
    "단과대학을 선택해주세요",
    "학과를 선택해주세요"
  );
  const region = useDropDown("지역을 선택해주세요");
  const field = useDropDown("분야를 선택해주세요");

  return (
    <MainLayout
      onChipClick={(type) => onTypeChange(type)}
      onMiniSearchClick={() => {
        setSearchActive(true);
      }}
    >
      {searchActive && (
        <>
          <S.SearchModal>
            <Search placeholder={"관심있는 동아리를 찾을 수 있어요"} />
            <S.Filters>
              <SortTag
                data={SORT_TAG_DATA}
                onSelectChange={(tagID) => {
                  setTag(tagID);
                }}
              />
              {/* 교내 */}
              {tag === 1 && (
                <DropdownComponents dropdown={depart} dropdown2={major} />
              )}
              {/* 중앙 */}
              {tag === 2 && (
                <DropdownComponents dropdown={field} dropdown2={null} />
              )}
              {/* 연합 */}
              {tag === 3 && (
                <DropdownComponents dropdown={field} dropdown2={region} />
              )}
            </S.Filters>
          </S.SearchModal>
          <S.Backdrop
            onClick={() => {
              setSearchActive(false);
            }}
          />
        </>
      )}
      <S.Container>
        <S.Title>
          모든 동아리({type === 1 ? "전체" : type === 2 ? "교내" : "연합"})
        </S.Title>
        <Cards data={DUMMY_CARD} carousel={false} badge={true} />
      </S.Container>
    </MainLayout>
  );
}
