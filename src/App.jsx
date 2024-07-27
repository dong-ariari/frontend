import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./assets/styles/GlobalStyle";
import DefaultTheme from "./assets/styles/DefaultTheme";
import Mypage from "./pages/mypage";
import Layout from "./layouts/layout/layout";
import Explore from "./pages/explore/explore";
import All from "./pages/all/all";
import Favorites from "./pages/favorites/favorites";
import Register from "./pages/register/register";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ThemeProvider theme={DefaultTheme}>
        <div
          style={{
            backgroundColor: "pink",
            paddingLeft: "100px",
          }}
        >
          {/* <Alert
            data={DUMMY_ALERT}
            onClick={() => {
              console.log("clicked");
            }}
          /> */}
        </div>
        <Routes>
          <Route path="/" element={<Test>Hello World</Test>} />
          <Route path="/all" element={<All />} />
          <Route path="/campus" element={<Oncampus />} />
          <Route path="/offCampus" element={<Offcampus />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/notification" element={<Notification />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
