import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainScreen from "./pages/MainScreen";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route index element={<Signup />} />
          <Route path="/home" element={<MainScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
