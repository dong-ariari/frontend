import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./assets/styles/GlobalStyle";
import DefaultTheme from "./assets/styles/DefaultTheme";
import All from "./pages/all/all";
import Oncampus from "./pages/oncampus";
import Offcampus from "./pages/offcampus";
import Mypage from "./pages/mypage";
import Layout from "./layouts/layout/layout";
import MainLayout from "./layouts/mainLayout/mainLayout";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ThemeProvider theme={DefaultTheme}>
        <Layout>
          <Routes>
            <Route path="/" element={<>hello world</>} />

            {/* 둘러보기(전체, 교내, 연합) */}
            <Route path="/all" element={<All />} />
            <Route path="/on-campus" element={<Oncampus />} />
            <Route path="/off-campus" element={<Offcampus />} />
            {/* 전체 동아리 */}
            <Route path="/clubs" element={<>all clubs</>} />
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
