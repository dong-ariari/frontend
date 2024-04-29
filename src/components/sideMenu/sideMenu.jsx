import * as S from "./sideMenu.styles";
import EyeIcon from "../../assets/images/eyes.png";

const SideMenu = () => {
  return (
    <>
      <S.Container>
        <S.Section>
          <S.Image src={EyeIcon} alt="side_menu_icon" />
          <S.Text>둘러보기</S.Text>
        </S.Section>
      </S.Container>
    </>
  );
};

export default SideMenu;
