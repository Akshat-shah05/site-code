import './App.css';
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Footer from './components/Footer'
import About from './pages/About/aboutMe'
import Projects from './pages/Projects/Projects'

function App() {
  return (
     <>
      <div className='main-body'>
        <Navbar/>
        <Intro/>
        <About />
        <Projects />
        <Footer/>
      </div>
     </> 
      
  );
}

export default App;
