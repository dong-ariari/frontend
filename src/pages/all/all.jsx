import Cards from "../../components/cards/cards.jsx";
import { DUMMY_CARD } from "../../data/dummy/cards.js";
import MainLayout from "../../layouts/mainLayout/mainLayout.jsx";
import * as S from "./all.styles.js";

const All = () => {
  return (
    <MainLayout>
      <S.Container>
        <S.Section>
          <S.Title>최신순</S.Title>
          <Cards data={DUMMY_CARD} />
        </S.Section>
        <S.Section>
          <S.Title>인기순</S.Title>
          <Cards data={DUMMY_CARD} />
        </S.Section>
        <S.Section>
          <S.Title>마감임박순</S.Title>
          <Cards data={DUMMY_CARD} />
        </S.Section>
      </S.Container>
    </MainLayout>
  );
};

export default All;
