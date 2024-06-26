import ChipsComponent from "../components/chips/chipsComponent.jsx";
import Footer from "../components/footer/footer";
import Header from "../components/header/header.jsx";
import SideMenuComponent from "../components/sideMenu/sideMenuComponent.jsx";
import { CHIPS_DATA } from "../data/components/chips.js";
import { FOOTER_TEXT, FOOTER_TEXT2 } from "../data/components/footer.js";
import { SIDEMENU_DATA } from "../data/components/sideMenu.js";

const All = () => {
  return (
    <>
      <Header />
      <SideMenuComponent data={SIDEMENU_DATA} />
      <ChipsComponent data={CHIPS_DATA} />
      <Footer text={FOOTER_TEXT} text2={FOOTER_TEXT2} />
    </>
  );
};

export default All;
