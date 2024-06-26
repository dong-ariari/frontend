import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import { FOOTER_TEXT, FOOTER_TEXT2 } from "../../data/components/footer";
import * as S from "./layout.styles";

export default function Layout({ children }) {
  return (
    <S.Container>
      <Header />
      <S.Main>{children}</S.Main>
      <Footer text={FOOTER_TEXT} text2={FOOTER_TEXT2} />
    </S.Container>
  );
}
