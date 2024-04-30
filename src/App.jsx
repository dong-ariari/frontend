import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./assets/styles/GlobalStyle";
import DefaultTheme from "./assets/styles/DefaultTheme";
import ChipsComponent from "./components/chips/chipsComponent";
import All from "./pages/all";
import { CHIPS_DATA } from "./data/components/chips";
import Oncampus from "./pages/oncampus";
import Offcampus from "./pages/offcampus";

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
        <ChipsComponent data={CHIPS_DATA} />
        <Routes>
          <Route path="/" element={<Test>Hello World</Test>} />
          <Route path="/all" element={<All />} />
          <Route path="/oncampus" element={<Oncampus />} />
          <Route path="/offcampus" element={<Offcampus />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
