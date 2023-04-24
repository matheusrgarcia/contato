import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { UsersPage } from "./pages/UsersPage";
import { CompaniesPage } from "./pages/CompaniesPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<UsersPage />} />
          <Route path="usuarios" element={<UsersPage />} />
          <Route path="empresas" element={<CompaniesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
