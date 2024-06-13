import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import {Routes, Route} from 'react-router-dom';
import Contact from './pages/Contact';
import Abouts from './pages/Abouts';
import Gallery from './pages/Gallery';

function App() {
  return (
    <div id="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<Abouts/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
