import * as S from "./header.styles";
import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

export default function Header({ img, userName, hasAlert, isLogedIn, onLoginStateChange }) {
  const navigate = useNavigate();
  function handleNavigate(uri) {
    console.log(uri);
    navigate(uri);
  }

  function handleLoginState(){
    if (isLogedIn){
      onLoginStateChange(false)
    }else{
      onLoginStateChange(true); 
    }
  }

  return (
    <S.Layer>
      <S.Container>
        <S.Wrapper>
          <S.Title onClick={()=>handleNavigate("/all")}>
            <S.Logo src={logo} />
            <S.Eng>AriAri</S.Eng>
            <S.Kor>아리아리</S.Kor>
          </S.Title>

          <S.Profile onClick={()=>handleNavigate('/mypage')}>
            <S.Image src={img} />
            <S.UserName>{userName}</S.UserName>
          </S.Profile>
        </S.Wrapper>

        <S.LinkBox>
          {/* 알림 컴포넌트 추가 개발 필 */}
          <S.Link>
            새 알림
            {hasAlert && <S.Alert />}
          </S.Link>
          <S.Link onClick={() => handleNavigate("/mypage")}>마이페이지</S.Link>
          <S.Link onClick={handleLoginState}>
            {isLogedIn ? "로그아웃" : "로그인"}
          </S.Link>
        </S.LinkBox>
      </S.Container>
    </S.Layer>
  );
}
