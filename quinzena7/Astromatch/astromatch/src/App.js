import Home from './pages/Home';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

body{
  box-sizing: border-box;
  background-color: #C1B2F4;
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

`

function App() {
  return <>
  <GlobalStyle></GlobalStyle>
  <Home></Home>
  </>
}

export default App;
