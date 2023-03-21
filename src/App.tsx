import "./App.css";
import { Body } from "./components/body/Body";
import { UserContextProvider } from "./components/useContext/UserContext";
import { Header } from "./components/header";

function App() {
  return (
    <UserContextProvider value={"1"}>
      <div className="App">
        <Header />
        <Body />
      </div>
    </UserContextProvider>
  );
}

export default App;
