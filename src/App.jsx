import './App.css'
import Navbar from './components/navbar'
import Body from './components/body'
import About from './pages/about';
import Services from './pages/services';
import Projects from './pages/projects';
import Works from './pages/works';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/works" element={<Works />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
