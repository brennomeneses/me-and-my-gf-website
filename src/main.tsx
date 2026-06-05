import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CustomProvider } from 'rsuite';
import App from './App.tsx'
import './index.css'
import 'rsuite/dist/rsuite.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CustomProvider theme='light'>
      <App />
    </CustomProvider>
  </StrictMode>,
)
