import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div id="App">
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
