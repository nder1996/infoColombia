import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Ingreso from './components/Ingreso/Ingreso.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';




function App() {
    return (
        <Routes>
            <Route path="/" element={<Ingreso />} /> {/* Default route */}
            <Route path="/Ingreso" element={<Ingreso />} />
        </Routes>
    );
}

export default App;
