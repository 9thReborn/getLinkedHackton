import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ContactPage from './Pages/ContactPage';
import RegisterPage from 'Pages/RegisterPage';
import LandingPage from 'Pages/LandingPage';
import DataProvider from 'context/authContext';
import {ToastContainer} from 'react-toastify'

function App() {
  return (
    <DataProvider>
      <ToastContainer/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/hackathon/contact-form" element={<ContactPage />} />
          <Route path="/hackathon/registration" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
