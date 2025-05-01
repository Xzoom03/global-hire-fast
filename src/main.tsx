
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Mount React App
const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<App />);
} else {
  console.error("Failed to find the root element");
}
