/**
 * @copyright 2024 ARAVINDH
 * @license Apache-2.0
 */


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import 'lenis/dist/lenis.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
