import { RelayEnvironmentProvider } from "react-relay";
import { relayEnvironment } from "../services/RelayEnvironment";
import { BrowserRouter, Route, Routes } from "react-router";
import GalleryPage from "./pages/GalleryPage";
import { UploadPage } from "./pages/UploadPage";
import React from "react";

export default function App() {
  return (
    <RelayEnvironmentProvider environment={relayEnvironment}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GalleryPage />} />
          <Route path="/upload" element={<UploadPage />} />
        </Routes>
      </BrowserRouter>
    </RelayEnvironmentProvider>
  );
}
