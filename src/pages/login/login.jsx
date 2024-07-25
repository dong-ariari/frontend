import React, { useState } from "react";
import axios from "axios";
import { API_URL, REDIRECT_URI, REST_API_KEY } from "../../api/common";

const Login = () => {
  const [loading, setLoading] = useState(false);
  // const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleLogin = () => {
    setLoading(true);
    // window.location.href = kakaoURL;
    // console.log("카카오 로그인을 클릭했습니다");
    fetchData();
  };

  // 프로필 정보
  const fetchData = async () => {
    const inputURL = `/test/token`;
    try {
      const response = await axios.get(`${API_URL}${inputURL}`, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Access-Control-Allow-Origin": "*",
        },
      });
      console.log(response.data);
      const accessToken = response.data.accessTokaen;
      console.log("accessToken >>>", accessToken);
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
