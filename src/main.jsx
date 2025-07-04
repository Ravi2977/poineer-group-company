import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import '@/index.css';
import { ThemeProvider } from '@/components/theme-provider';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider defaultTheme="dark" storageKey="pioneer-ui-theme">
        <App />
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);
