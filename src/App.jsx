import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./assets/styles/GlobalStyle";
import DefaultTheme from "./assets/styles/DefaultTheme";
import Chips from "./components/chips/chips";

// default theme 사용법
const Test = styled.div`
  background-color: ${(props) => props.theme.color.grey._700};
  color: ${(props) => props.theme.color.white};
  ${(props) => props.theme.typo.fontSize._1};
  ${(props) => props.theme.typo.fontWeight._500};
`;

const chipsData = [
  { id: 1, content: "전체", uri: "전체 페이지" },
  { id: 2, content: "교내", uri: "교내 페이지" },
  { id: 3, content: "교외", uri: "교외 페이지" },
];

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={DefaultTheme}>
        <Test>hello world</Test>
        <Chips title={chipsData} />
      </ThemeProvider>
    </>
  );
}

export default App;
