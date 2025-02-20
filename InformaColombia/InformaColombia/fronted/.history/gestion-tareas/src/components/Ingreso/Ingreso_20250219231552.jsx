import React, { useState } from 'react';
import { Calendar } from 'primereact/calendar';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const Ingreso = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    date: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Usuario"
        value={formData.username}
        onChange={(e) => setFormData({...formData, username: e.target.value})}
        required
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={formData.password}
        onChange={(e) => setFormData({...formData, password: e.target.value})}
        required
      />
      <Calendar
        placeholder="Seleccionar Fecha"
        value={formData.date}
        onChange={(e) => setFormData({...formData, date: e.value})}
        dateFormat="dd/mm/yy"
        showIcon
      />
      <button type="submit">Ingresar</button>
    </form>
  );
};

export default Ingreso;