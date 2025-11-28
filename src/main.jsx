import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// 🔥 AOS Imports
import AOS from "aos";
import "aos/dist/aos.css";

// 🔥 Initialize AOS (before render)
AOS.init({
  duration: 800,
  once: true,
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
  