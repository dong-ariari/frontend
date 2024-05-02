import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./assets/styles/GlobalStyle";
import DefaultTheme from "./assets/styles/DefaultTheme";
import ChipsComponenet from "./components/chips/chipsComponenet";
import All from "./pages/all";
import Campus from "./pages/oncampus";
import Suburbs from "./pages/offcampus";
import { CHIPS_DATA } from "./data/components/chips";
import Header from "./components/header/header";

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
        <Header userName='User_name#Number' hasAlert='true' />
        <ChipsComponenet data={CHIPS_DATA} />
        <Routes>
          <Route path="/" element={<Test>Hello World</Test>} />
          <Route path="/all" element={<All />} />
          <Route path="/campus" element={<Campus />} />
          <Route path="/suburbs" element={<Suburbs />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
