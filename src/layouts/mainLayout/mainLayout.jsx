import * as S from "./mainLayout.styles";
import { MAIN_SIDEMENU_DATA } from "../../data/components/sideMenu.js";
import SideMenuComponent from "../../components/sideMenu/sideMenuComponent.jsx";
import MiniSearch from "../../components/miniSearch/miniSearch";
import { CHIPS_DATA } from "../../data/components/chips";
import Chips from "../../components/chips/chips.jsx";

export default function MainLayout({
  children,
  onChipClick,
  onMiniSearchClick,
}) {
  return (
    // 서브 헤더(미니서치, 칩스) & 컨텐츠 레이아웃
    <>
      <S.Header>
        <S.Content $miniSearch={onMiniSearchClick} $chips={onChipClick}>
          <MiniSearch onClick={onMiniSearchClick} />
          <Chips data={CHIPS_DATA} onChipClick={(id) => onChipClick(id)} />
        </S.Content>
      </S.Header>

      <S.Container>
        <SideMenuComponent data={MAIN_SIDEMENU_DATA} />
        {children}
      </S.Container>
    </>
  );
}
