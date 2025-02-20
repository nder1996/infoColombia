import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Importa los componentes
import Ingreso from './components/Ingreso';
// Si no tienes un componente Tareas, crea un

function App() {
    return (
        <div className="App">
                 <BrowserRouter>
                    <Routes>
                        <Route path="/ingreso" element={<Ingreso />} />
                    </Routes>
                </BrowserRouter>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>HOLA MUNDO</h1>
           
            </header>
        </div>
    );
}

export default App;
