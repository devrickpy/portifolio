import './App.css';
import { About } from './components/About/About';
import { Footer } from './components/Footer/Footer';
import { Download, Home, Links } from './components/Home/Home';
import { Sidebar } from './components/Home/Sidebar/Sidebar';
import { Projects }  from './components/Projects/Projects';
import { Portfolio } from './components/Skills/Certifications';
import { Skills } from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Home />
      <Download />
      <Links />
      <Skills />
      <Portfolio />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}

export default App;
