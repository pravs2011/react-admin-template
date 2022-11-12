import { Toaster } from "react-hot-toast";
import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Dashboard from "./pages/Home/Dashboard";

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            fontSize: "1 rem",
          },
        }}
      ></Toaster>
      <Routes>
        <Route path="/login" name="Login" element={<Dashboard />} />
        <Route path="*" name="Dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
