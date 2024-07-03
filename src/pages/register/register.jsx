import Banner from "../../components/banner/banner";
import { REGISTER_BANNER } from "../../data/components/banner";
import MainLayout from "../../layouts/mainLayout/mainLayout";
import * as S from "./register.styles";

export default function Register() {
  return (
    <MainLayout>
      <S.Layer>
        <Banner data={REGISTER_BANNER} />
        <S.Container>
            <S.Title>기본 정보</S.Title>
            <S.Title>동아리 소개</S.Title>
        </S.Container>
      </S.Layer>
    </MainLayout>
  );
}
