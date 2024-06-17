import { useNavigate } from "react-router-dom";
import * as S from "./sideMenu.styles";

const SideMenu = ({ data }) => {
  const navigate = useNavigate();

  const handleChipsClick = (uri) => {
    console.log(uri);
    // navigate(uri);
  };

  return (
    <S.Wrapper>
      {data.map((item) => (
        <S.Container
          key={item.id}
          $variant={item.variant}
          onClick={() => handleChipsClick(item.uri)}
        >
          <S.Section key={item.id}>
            <S.Image src={item.imgPath} alt="side_menu_icon" />
            <S.Text $variant={item.variant}>{item.title}</S.Text>
          </S.Section>
        </S.Container>
      ))}
    </S.Wrapper>
  );
};

export default SideMenu;
