import * as S from "./mainLayout.styles";
import { MAIN_SIDEMENU_DATA } from "../../data/components/sideMenu.js";
import SideMenuComponent from "../../components/sideMenu/sideMenuComponent.jsx";
import MiniSearch from "../../components/miniSearch/miniSearch";
import ChipsComponent from "../../components/chips/chipsComponent";
import { CHIPS_DATA } from "../../data/components/chips";

export default function MainLayout({ children }) {
  return (
    <>
      <S.Header>
        <S.Content>
          <MiniSearch />
          <ChipsComponent data={CHIPS_DATA} />
        </S.Content>
      </S.Header>

      <S.Container>
        <SideMenuComponent data={MAIN_SIDEMENU_DATA} />
        {children}
      </S.Container>
    </>
  );
}
