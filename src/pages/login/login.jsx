import React, { useState } from "react";
import api from "@/api/api";

const Login = () => {
  const [loading, setLoading] = useState(false);
  // const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleLogin = () => {
    setLoading(true);
    // window.location.href = kakaoURL;
    // console.log("카카오 로그인을 클릭했습니다");
    fetchData();
  };

  const fetchData = async () => {
    try {
      const response = await api.get("/test/token");
      console.log(response.data);
    } catch (error) {
      console.error("에러:", error);
    }
  };

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <button onClick={handleLogin}>카카오 로그인</button>
      )}
    </>
  );
};

export default Login;
