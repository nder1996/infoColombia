import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Ingreso from './components/Ingreso';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/ingreso" element={<Ingreso />} />
          <Route path="/" element={
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1>HOLA MUNDO</h1>
            </header>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;