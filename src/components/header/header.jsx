import * as S from "./header.styles";
import logo from "../../assets/images/logo.png";

export default function Header({ img, userName, hasAlert }) {
  return (
    <S.Layer>
      <S.Container>
        <S.Wrapper>
          <S.Title>
            <S.Logo src={logo} />
            <S.Eng>AliAli</S.Eng>
            <S.Kor>아리아리</S.Kor>
          </S.Title>

          <S.Profile>
            <S.Image src={img} />
            <S.UserName>{userName}</S.UserName>
          </S.Profile>
        </S.Wrapper>

        <S.LinkBox>
          <S.Link>
            새 알림
            {hasAlert && <S.Alert />}
          </S.Link>
          <S.Link>마이페이지</S.Link>
          <S.Link>로그인</S.Link>
        </S.LinkBox>
      </S.Container>
    </S.Layer>
  );
}
