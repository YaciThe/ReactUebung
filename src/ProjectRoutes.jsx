import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { ShowCard } from "./pages/ShowCard";
import { ShowSmarthome } from "./pages/ShowSmarthome";
import { ShowVacation } from "./pages/ShowVacation";
import { ShowData } from "./pages/ShowData";

export function ProjectRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/card" element={<ShowCard />} />
        <Route path="/smarthome" element={<ShowSmarthome />} />
        <Route path="/vacation" element={<ShowVacation />} />
        <Route path="/data" element={<ShowData />} />
      </Routes>
    </BrowserRouter>
  )
};