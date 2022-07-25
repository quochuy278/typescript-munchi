import "./App.css";
import { Routes, Route } from "react-router-dom";
import { LoginPage, HomePage, MainPage} from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
