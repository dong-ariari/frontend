import Cards from "../../components/cards/cards.jsx";
import { DUMMY_CARD } from "../../data/dummy/cards.js";
import MainLayout from "../../layouts/mainLayout/mainLayout.jsx";
import * as S from "./all.styles.js";

const All = () => {
  return (
    <MainLayout>
      <S.Container>
        <S.Section>
          <S.Title>새롭게 모집 중인 동아리가 있어요!</S.Title>
          <Cards data={DUMMY_CARD.slice(0, 3)} />
        </S.Section>
        <S.Section>
          <S.Title>지금 인기 급상승중인 동아리에요</S.Title>
          <Cards data={DUMMY_CARD.slice(0, 3)} />
        </S.Section>
      </S.Container>
    </MainLayout>
  );
};

export default All;
