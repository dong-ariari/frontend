import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./assets/styles/GlobalStyle";
import DefaultTheme from "./assets/styles/DefaultTheme";
import All from "./pages/all";
import Oncampus from "./pages/oncampus";
import Offcampus from "./pages/offcampus";
import Mypage from "./pages/mypage";
import Login from "./pages/login/login";
import Redirection from "./pages/login/redirection";
import Home from "./pages/home";

const Test = styled.div`
  background-color: ${(props) => props.theme.color.grey._700};
  color: ${(props) => props.theme.color.white};
  ${(props) => props.theme.typo.fontSize._1};
  ${(props) => props.theme.typo.fontWeight._500};
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ThemeProvider theme={DefaultTheme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all" element={<All />} />
          <Route path="/campus" element={<Oncampus />} />
          <Route path="/offCampus" element={<Offcampus />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/login" element={<Login />} />
          <Route path="/auth/kakao/callback" element={<Redirection />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
