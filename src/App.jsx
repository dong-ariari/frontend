import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./assets/styles/GlobalStyle";
import DefaultTheme from "./assets/styles/DefaultTheme";
import All from "./pages/all";
import Oncampus from "./pages/oncampus";
import Offcampus from "./pages/offcampus";
import ChipsComponent from "./components/chips/chipsComponent";
import { CHIPS_DATA } from "./data/components/chips";
import { Alert } from "./components/alert/alert";
import { DUMMY_ALERT } from "./data/dummy/alert";
import Mypage from "./pages/mypage";
import Layout from "./layouts/layout";

// default theme 사용법
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
        <Layout>
          <Routes>
            <Route path="/" element={<Test>Hello World</Test>} />
            {/* 둘러보기(전체, 교내, 연합) */}
            <Route path="/all" element={<All />} />
            <Route path="/on-campus" element={<Oncampus />} />
            <Route path="/off-campus" element={<Offcampus />} />

            {/* 동아리 등록하기 */}
            <Route path="/register" element={<>register</>} />

            {/* 동아리 모집하기 */}
            <Route path="/recruit" element={<>recruit</>} />

            {/* 즐겨찾기 */}
            <Route path="/favorites" element={<>favorites</>} />

            <Route path="/mypage" element={<Mypage />} />
            <Route path="/notification" element={<Notification />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </Router>
  );
}

export default App;
