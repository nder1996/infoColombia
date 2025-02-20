import React, { useState } from 'react';
import { Calendar } from 'primereact/calendar';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const Ingreso = () => {
  const [date, setDate] = useState(null);

  return (
    <div>
      <Calendar
        value={date}
        onChange={(e) => setDate(e.value)}
        inline
        showWeek
        locale="es"
        dateFormat="dd/mm/yy"
      />
    </div>
  );
};

export default Ingreso;