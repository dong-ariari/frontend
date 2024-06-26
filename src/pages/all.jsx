import Footer from "../components/footer/footer";
import Header from "../components/header/header.jsx";
import { FOOTER_TEXT, FOOTER_TEXT2 } from "../data/components/footer.js";

const All = () => {
  return (
    <>
      <Header />
      <Footer text={FOOTER_TEXT} text2={FOOTER_TEXT2} />
    </>
  );
};

export default All;
