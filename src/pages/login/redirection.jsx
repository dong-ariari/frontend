import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../api/common";

const Redirection = () => {
  const navigate = useNavigate();
  // const [code, setCode] = useState("");

  useEffect(() => {
    console.log("Redirection component mounted");

    const url = new URL(window.location.href);
    const code = url.searchParams.get("code");
    postData(code);
    // setCode(code);
    if (!code) {
      console.error("No authorization code found in URL.");
      return;
    }

    console.log(`Authorization code: ${code}`);

    localStorage.setItem("auth_code", code);

    // 페이지 이동
    // navigate("/mypage");
  }, [navigate]);

  const postData = async (code) => {
    const inputURL = `${API_URL}/login?code=${code}`;
    console.log(inputURL);
    // const inputURL = `/login?code=${encodeURIComponent(code)}`;
    try {
      const response = await axios.post(
        inputURL,
        {},
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      console.log("response.data >>>", response.data);

      // // Assuming the response contains the JWT token
      // const { accessToken } = response.data;
      // console.log("123123", response);
      // if (accessToken) {
      //   localStorage.setItem("jwt", accessToken);
      //   console.log("JWT Token:", accessToken);
      // } else {
      //   console.error("JWT token not found in the response");
      // }
    } catch (error) {
      console.error("Failed to fetch JWT:", error);
    }
  };

  return <div>로그인 중입니다...</div>;
};

export default Redirection;
