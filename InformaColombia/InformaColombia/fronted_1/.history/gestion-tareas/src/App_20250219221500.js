import { Routes, Route } from 'react-router-dom';
import Ingreso from './components/Ingreso';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<div>Página principal</div>} />
        <Route path="/ingreso" element={<Ingreso />} />
      </Routes>
    </div>
  );
}