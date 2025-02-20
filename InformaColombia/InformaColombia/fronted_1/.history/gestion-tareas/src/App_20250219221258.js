import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Ingreso from './components/Ingreso/Ingreso.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';




function App() {
    return (
        <BrowserRouter>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </header>
            <Routes>
              <Route path="/ingreso" element={<Ingreso />} />
            </Routes>
          </div>
        </BrowserRouter>
      );
}

export default App;
