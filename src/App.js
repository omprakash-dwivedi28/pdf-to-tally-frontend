// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
// import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import PdfToCsv from './pages/PdfToCsv'; // Importing PdfToCsv component

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* <Route path="/" element={<PdfToCsv />} /> */}
            <Route path="/pdftocsv" element={<PdfToCsv />} />
            {/* <Route path="/about" element={<AboutPage />} /> */}
            {/* <Route path="*" element={<NotFoundPage />} /> */}
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
