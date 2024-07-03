import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./assets/styles/GlobalStyle";
import DefaultTheme from "./assets/styles/DefaultTheme";
import Mypage from "./pages/mypage";
import Layout from "./layouts/layout/layout";
import Explore from "./pages/explore/explore";
import All from "./pages/all/all";
import Favorites from "./pages/favorites/favorites";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ThemeProvider theme={DefaultTheme}>
        <Layout>
          <Routes>
            <Route path="/" element={<>hello world</>} />
            {/* 둘러보기*/}
            <Route path="/explore" element={<Explore />} />
            {/* 전체 동아리 */}
            <Route path="/all" element={<All />} />
            {/* 동아리 등록하기 */}
            <Route path="/register" element={<>register</>} />
            {/* 동아리 모집하기 */}
            <Route path="/recruit" element={<>recruit</>} />
            {/* 즐겨찾기 */}
            <Route path="/favorites" element={<Favorites />} />

            <Route path="/mypage" element={<Mypage />} />
            <Route path="/notification" element={<Notification />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </Router>
  );
}

export default App;
