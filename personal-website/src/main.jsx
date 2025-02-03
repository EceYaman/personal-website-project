import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DataContextProvider } from './contexts/DataContext.jsx'
import { DarkModeProvider } from './contexts/ThemeContext.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
    <DarkModeProvider>
        <DataContextProvider>
            <App />
        </DataContextProvider>
        <ToastContainer />
    </DarkModeProvider>
  
)
