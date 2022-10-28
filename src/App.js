import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Diario from './pages/Diario';
import Calc from './pages/Calc';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />}/>
          <Route path='/Diario' exact element={<Diario />}/>
          <Route path='/Calc' exact element={<Calc />}/>      
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
