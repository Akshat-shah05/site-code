import './App.css';
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Footer from './components/Footer'
import About from './pages/About/aboutMe'
import Projects from './pages/Projects/Projects'
import Papers from './pages/Papers/Papers'
import Contact from './pages/contact/Contact'

function App() {
  return (
     <>
      <div className='main-body'>
        <Navbar/>
        <Intro/>
        <About />
        <Projects />
        <Papers />
        <Contact />
        <Footer/>
      </div>
     </> 
      
  );
}

export default App;
