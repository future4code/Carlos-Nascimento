import StateContextProvider from "./context/StateContext";
import { createGlobalStyle } from "styled-components";
import Home from "./pages/Home";
import Rotas from "./pages/Rotas";


const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;

}

body{
  height: 100vh;
  max-width: 100vw;

  background-image: url("https://preview.keenthemes.com/metronic8/demo10/assets/media/misc/page-bg.jpg");
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  font-family: Poppins, sans-serif;
}

`;

function App() {

  return (
    <div className="App">
      
      <StateContextProvider>
      <GlobalStyle />
      <Rotas/>
      </StateContextProvider>

    </div>
  );
}

export default App;
