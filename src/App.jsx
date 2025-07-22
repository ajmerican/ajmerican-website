import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ITConsulting from './pages/ITConsulting';
import CloudComputing from './pages/CloudComputing';
import VOIPDesign from './pages/VOIPDesign';
import SocialMediaMarketing from './pages/SocialMediaMarketing';
import Branding from './pages/Branding';
import DigitalSignage from './pages/DigitalSignage';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/it-consulting" element={<ITConsulting />} />
            <Route path="/cloud-computing" element={<CloudComputing />} />
            <Route path="/voip-design" element={<VOIPDesign />} />
            <Route path="/social-media-marketing" element={<SocialMediaMarketing />} />
            <Route path="/branding" element={<Branding />} />
            <Route path="/digital-signage" element={<DigitalSignage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

