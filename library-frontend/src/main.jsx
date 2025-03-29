import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Auth from "./pages/Auth";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/" element={<Auth />} />
        <Route path="/admin/*" element={<ProtectedApp />} />
      </Routes>
    </BrowserRouter>
  );
};

// Simple auth check (replace with real auth logic)
const ProtectedApp = () => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true"; // Simulated auth
  return isAuthenticated ? <App /> : <Auth />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Root />
  </StrictMode>
);
