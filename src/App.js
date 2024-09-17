import Navbar from './Navbar.js';
import Home from './Home.js';
import Experience from './pages/Experience.js';
import Projects from './pages/Projects.js';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
