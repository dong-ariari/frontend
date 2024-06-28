import { useEffect, useState } from "react";
import Cards from "../../components/cards/cards";
import { DUMMY_CARD } from "../../data/dummy/cards";
import MainLayout from "../../layouts/mainLayout/mainLayout";
import Search from "../../components/search/search";
import DropdownComponents from "../../components/dropdown/dropdownComponents";
import * as S from "./all.styles";
import { useDropDown, useDropDown2 } from "../../hooks/useDropdown";
import SortTag from "../../components/tag/sortTag";
import { SORT_TAG_DATA } from "../../data/components/sortTag";
import { FIELD, REGION } from "../../data/components/dropdown";
import { DUMMY_DEPART } from "../../data/dummy/dropdown";

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
  const depart = useDropDown("단과대학을 선택해주세요");
  const major = useDropDown("학과를 선택해주세요", false);
  const region = useDropDown("지역을 선택해주세요");
  const field = useDropDown("분야를 선택해주세요");

  function clearDropdown() {
    depart.setSelected(null);
    major.setSelected(null);
    region.setSelected(null);
    field.setSelected(null);
  }
  // GET 검색 결과 요청
  function searchHandle(value) {
    if (tag === 1) {
      console.log(value, depart.value, major.value);
    } else if (tag === 2) {
      console.log(value, field.value);
    } else if (tag === 3) {
      console.log(value, field.value, region.value);
    } else {
      console.log(value);
    }

    clearDropdown();
  }

  function onTagChange(id) {
    setTag(id);
    clearDropdown();
  }

  useEffect(() => {
    region.setSpreadData(REGION);
    field.setSpreadData(FIELD);
  }, []);

  function onSearchActive() {
    setSearchActive(true);
    // GET dropdown data 요청(학과 데이터 제외)
    depart.setSpreadData(DUMMY_DEPART);
  }

  function onSearchDeactive() {
    setSearchActive(false);
    clearDropdown();
    setTag(null);
  }

  return (
    <MainLayout
      onChipClick={(type) => onTypeChange(type)}
      onMiniSearchClick={onSearchActive}
    >
      {searchActive && (
        <>
          <S.SearchModal>
            <Search
              onSearch={searchHandle}
              placeholder={"관심있는 동아리를 찾을 수 있어요"}
            />
            <S.Filters>
              <SortTag data={SORT_TAG_DATA} onSelectChange={onTagChange} />
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
          <S.Backdrop onClick={onSearchDeactive} />
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
