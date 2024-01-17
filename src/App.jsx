import React from "react";
import "./App.css";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import UsPage from "./pages/UsPage";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./components/Navbar";
import UserPage from "./pages/UserPage";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <Navbar />
        <hr />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/nosotros" element={<UsPage />} />
          <Route path="/nosotros/:id" element={<UserPage />} />
          <Route path="/nosotras" element={<Navigate to="/nosotros" />} />
          <Route path="/dashboard/*" element={<Dashboard />}>
            <Route path="bienvenido" element={<h3>WELCOME</h3>} />
            <Route path="despedida" element={<h3>BYE</h3>} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;