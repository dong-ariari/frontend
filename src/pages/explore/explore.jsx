import { useState } from "react";
import Cards from "../../components/cards/cards.jsx";
import { DUMMY_CARD } from "../../data/dummy/cards.js";
import MainLayout from "../../layouts/mainLayout/mainLayout.jsx";
import * as S from "./explore.styles.js";

const Explore = () => {
  const [type, setType] = useState(1); 
  function onTypeChange(type) {
    setType(type)
  }
  return (
    <MainLayout onChipClick={(type)=> onTypeChange(type)}>
      <S.Container>
        <S.Section>
          <S.Title>{type===1 ? '전체' : type == '2' ? '교내' : '연합'} 최신순</S.Title>
          <Cards onClick={() => {}} data={DUMMY_CARD} carousel={true} />
        </S.Section>
        <S.Section>
          <S.Title>인기순</S.Title>
          <Cards onClick={() => {}} data={DUMMY_CARD} carousel={true} />
        </S.Section>
        <S.Section>
          <S.Title>마감임박순</S.Title>
          <Cards onClick={() => {}} data={DUMMY_CARD} carousel={true} />
        </S.Section>
      </S.Container>
    </MainLayout>
  );
};

export default Explore;
