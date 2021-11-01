import Home from './pages/Home';
import { createGlobalStyle } from 'styled-components';
import {routes as Routes} from './routes/routes';

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
}

body{
  box-sizing: border-box;
  background-color: rgba(168,10,63,1);
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  font-family: 'Poppins', sans-serif;
}

`

function App() {
  return <>
  <GlobalStyle></GlobalStyle>
  <Routes/>
  </>
}

export default App;
