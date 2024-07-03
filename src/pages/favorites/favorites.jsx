import Cards from "../../components/cards/cards";
import { DUMMY_CARD } from "../../data/dummy/cards";
import MainLayout from "../../layouts/mainLayout/mainLayout";
import * as S from "./favorites.styles";

export default function Favorites() {
  return (
    <MainLayout>
      <S.Layer>
        <S.Title>즐겨찾는 동아리</S.Title>
        <Cards small="true" data={DUMMY_CARD} />
      </S.Layer>
    </MainLayout>
  );
}
