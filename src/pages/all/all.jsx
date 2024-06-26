import { useState } from "react";
import Cards from "../../components/cards/cards";
import { DUMMY_CARD } from "../../data/dummy/cards";
import MainLayout from "../../layouts/mainLayout/mainLayout";
import * as S from "./all.styles";

export default function All() {
  const [type, setType] = useState(1);
  function onTypeChange(type) {
    setType(type);
  }

  return (
    <MainLayout onChipClick={(type) => onTypeChange(type)}>
      <S.Container>
        <S.Title>
          모든 동아리({type === 1 ? "전체" : type === 2 ? "교내" : "연합"})
        </S.Title>
        <Cards data={DUMMY_CARD} carousel={false} />
      </S.Container>
    </MainLayout>
  );
}
