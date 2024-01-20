import * as React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./components/home";
export default function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
    </Routes>
  );
}
