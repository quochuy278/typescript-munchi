import "./App.css";
import { Routes, Route } from "react-router-dom";
import { LoginPage, SignUpPage, MainPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
}

export default App;
