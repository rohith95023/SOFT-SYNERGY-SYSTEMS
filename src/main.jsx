/**
 * main.jsx — Application Bootstrap
 * ==================================
 * Mounts the React app with all required providers:
 * - HelmetProvider   → per-page <head> management (SEO)
 * - BrowserRouter    → client-side routing
 * - ThemeProvider    → dark/light mode context
 *
 * Provider order matters: outer providers are available to inner ones.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/global.css';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        {/* ThemeProvider makes useTheme() available to all components */}
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
);
