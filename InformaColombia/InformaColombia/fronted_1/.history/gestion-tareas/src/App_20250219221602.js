import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Ingreso from './components/Ingreso/Ingreso.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';




function App() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/Ingreso" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route 
              path="/tasks/*" 
              element={
                <ProtectedRoute>
                  <TasksLayout />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </BrowserRouter>
      );
}

export default App;
