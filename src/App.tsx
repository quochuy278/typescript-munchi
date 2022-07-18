import "./App.css";
import { Routes, Route } from "react-router-dom";
import { LoginPage, HomePage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
