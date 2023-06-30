import './App.css';
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Footer from './components/Footer'
import Contact from './pages/contact/Contact'

function App() {
  return (
    <div className='main-body'>
      <Navbar/>
      <Intro/>
      <Footer/>
    </div>
  );
}

export default App;
