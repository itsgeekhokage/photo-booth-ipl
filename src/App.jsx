import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import {
  HomePage,
  CameraPage,
  AvatarPage,
  OutputPage,
  GridPage,
} from "./pages";

export default function App() {
  return (
    <BrowserRouter>
      {/* header */}
      <Header />

      <Routes>
        {/* home-page */}
        <Route path="/" element={<HomePage />} />

        {/* camera-page */}
        <Route path="/camera" element={CameraPage} />

        {/* avatar-page */}
        <Route path="/avatar" element={AvatarPage} />

        {/* output-page */}
        <Route path="/output" element={OutputPage} />

        {/* grid-page */}
        <Route path="/grid" element={<GridPage />} />
      </Routes>
    </BrowserRouter>
  );
}
