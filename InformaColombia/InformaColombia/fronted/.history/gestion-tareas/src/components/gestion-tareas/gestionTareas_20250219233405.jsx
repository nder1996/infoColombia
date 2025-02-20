import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


const [products] = useState([
    { code: 'P001', name: 'Laptop', category: 'Electronics', quantity: 10 },
    { code: 'P002', name: 'Smartphone', category: 'Electronics', quantity: 15 },
    { code: 'P003', name: 'Headphones', category: 'Accessories', quantity: 20 },
    { code: 'P004', name: 'Tablet', category: 'Electronics', quantity: 8 },
    { code: 'P005', name: 'Smartwatch', category: 'Wearables', quantity: 12 }
  ]);

const gestionTareas = () => {
  return (
    <div>
      <h1>Hola Mundo</h1>
    </div>
  );
};

export default gestionTareas;