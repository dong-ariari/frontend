import React from "react";
import { REDIRECT_URI, REST_API_KEY } from "../../api/common";

const Login = () => {
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const handleLogin = () => {
    window.location.href = kakaoURL;
    console.log("카카오 로그인을 클릭했습니다");
  };

  return (
    <>
      <button onClick={handleLogin}>카카오 로그인</button>
    </>
  );
};

export default Login;
