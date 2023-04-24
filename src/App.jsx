import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { RegisterForm } from "./pages/RegisterForm";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterForm />}>
          <Route index element={<RegisterForm />} />
          <Route path="usuarios" element={<RegisterForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
