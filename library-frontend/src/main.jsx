import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import "./index.css";
import App from "./App";
import Auth from "./pages/Auth";
import Home from "./pages/HomeView";
import HomeView from "./pages/HomeView";

const Root = () => {
  return (
    <AuthProvider>
      <Router
        future={{
          v7_startTransition: true,
        }}
      >
        <Routes>
          <Route path="/auth/" element={<Auth />} />
          <Route element={<PrivateRoute />}>
            <Route path="/admin/*" element={<App />} />
          </Route>
          <Route path="/" element={<HomeView />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Root />
  </StrictMode>
);
