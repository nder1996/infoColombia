import React, { useState } from 'react';
import './Ingreso.css';

export default function Ingreso() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({...credentials, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Intentando ingresar con:', credentials);
    // Aquí iría la lógica de autenticación
  };

  return (
    <div className="ingreso-container">
      <form onSubmit={handleSubmit}>
        <h2>Iniciar Sesión</h2>
        
        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Contraseña</label>
          <input 
            type="password" 
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit" className="btn-ingresar">
          Ingresar
        </button>
      </form>
    </div>
  );
}