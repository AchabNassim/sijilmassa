import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './pages/App.jsx'
const AboutUs = lazy(() => import('./pages/AboutUs.jsx'))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/sijilmassa" element={<App />} />
      <Route path="/sijilmassa/aboutUs" element={<AboutUs />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
