import { routes as Routes } from "./routes/routes";
import HandleDataContextProvider from "./context/context";
import { GlobalStyle } from "./styles/styles";

function App() {
  return (
    <HandleDataContextProvider>
      <GlobalStyle/>
      <Routes/>
    </HandleDataContextProvider>
  );
}

export default App;
