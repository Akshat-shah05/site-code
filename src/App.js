import './App.css';
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Footer from './components/Footer'
import About from './pages/About/aboutMe'
import Projects from './pages/Projects/Projects'
import Papers from './pages/Papers/Papers'
import Contact from './pages/contact/Contact'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
     <>
      <BrowserRouter>
        <div className='main-body'>
          <Navbar/>
          <Intro/>
          <About />
          <Projects />
          <Papers />
          <Contact />
          <Footer/>
        </div>
      </BrowserRouter>
     </> 
      
  );
}

export default App;
