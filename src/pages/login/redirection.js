import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Redirection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Redirection component mounted");

    const url = new URL(window.location.href);
    const code = url.searchParams.get("code");

    if (!code) {
      console.error("No authorization code found in URL.");
      return;
    }

    console.log(`Authorization code: ${code}`);

    // try {
    //   const response = await axios.post("http://localhost:8080/api/getKakaoToken", { code });
    //   const { access_token, refresh_token } = response.data;
    //   if (!access_token || !refresh_token) {
    //     throw new Error("Tokens not found in response");
    //   }
    //   console.log("Access Token:", access_token);
    //   console.log("Refresh Token:", refresh_token);
    //   localStorage.setItem("access_token", access_token);
    //   localStorage.setItem("refresh_token", refresh_token);
    // } catch (error) {
    //   console.error("Failed to get token:", error);
    // }

    // 로컬 스토리지에 코드 저장 (임시)
    localStorage.setItem("auth_code", code);

    // 페이지 이동
    navigate("/mypage");
  }, [navigate]);

  return <div>로그인 중입니다...</div>;
};

export default Redirection;
