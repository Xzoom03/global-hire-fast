
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Error boundary for production
const renderApp = () => {
  try {
    // Mount React App
    const rootElement = document.getElementById("root");
    if (rootElement) {
      createRoot(rootElement).render(<App />);
    } else {
      console.error("Failed to find the root element");
    }
  } catch (error) {
    console.error("Failed to render the application:", error);
    // Display a user-friendly error message
    const rootElement = document.getElementById("root");
    if (rootElement) {
      rootElement.innerHTML = `
        <div style="text-align: center; padding: 2rem;">
          <h2>Something went wrong</h2>
          <p>The application failed to load. Please try refreshing the page.</p>
        </div>
      `;
    }
  }
};

renderApp();
