import "./App.css";
import { BrowserRouter as Router,Routes, Route, } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ProjectDisplay from "./pages/ProjectDisplay";

function App()  {
  return (
    <div className="App">
      <Router>
      <NavBar />
        <Routes>
           <Route  path="/" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio/>} />
            <Route path="/project/:id" element={<ProjectDisplay />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/resume" element={<Resume/>} />
          
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;