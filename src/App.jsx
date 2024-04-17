import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./assets/styles/GlobalStyle";
import DefaultTheme from "./assets/styles/DefaultTheme";

// default theme 사용법
const Test = styled.div`
 background-color: ${(props)=>props.theme.color.grey._700};
 color: ${(props)=>props.theme.color.white};
 ${(props)=>props.theme.typo.fontSize._1};
 ${(props)=>props.theme.typo.fontWeight._500};
`

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={DefaultTheme}>
        <Test>hello world</Test>
      </ThemeProvider>
      
    </>
  );
}

export default App;
