import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import { HomePage, CameraPage, AvatarPage, OutputPage } from "./pages";

export default function App() {
  const [capturedImg, setCapturedImg] = useState();
  const [generatedImg, setGeneratedImg] = useState();
  const [url, setUrl] = useState();
  return (
    <BrowserRouter>
      {/* header */}
      <Header />

      <Routes>
        {/* home-page */}
        <Route path="/" element={<HomePage />} />

        {/* camera-page */}
        <Route
          path="/camera"
          element={<CameraPage setCapturedImg={setCapturedImg} />}
        />

        {/* avatar-page */}
        <Route
          path="/avatar"
          element={
            <AvatarPage
              setGeneratedImg={setGeneratedImg}
              capturedImg={capturedImg}
              setUrl={setUrl}
            />
          }
        />

        {/* output-page */}
        <Route
          path="/output"
          element={
            <OutputPage generatedImg={generatedImg} url={url} setUrl={setUrl} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
