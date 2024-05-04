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
        <div style={{backgroundColor: 'pink'}}>
        <Alert data={DUMMY_ALERT} />
        </div>
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
