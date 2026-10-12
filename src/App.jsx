import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Photography from './pages/Photography';
import Dnc2024 from './pages/Dnc2024';
import Publications from './pages/Publications';
import Gagizhibaajiwan from './pages/Gagizhibaajiwan';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter basename="/nupur.github.io">
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<About />} />
            <Route path="/photography" element={<Photography />} />
            <Route path="/dnc-2024" element={<Dnc2024 />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/gagizhibaajiwan" element={<Gagizhibaajiwan />} />
            <Route path="/contact-me" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
