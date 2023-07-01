import './App.css';
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Footer from './components/Footer'

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
