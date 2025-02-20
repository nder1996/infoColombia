import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { SelectButton, SelectButtonChangeEvent } from 'primereact/selectbutton';

// Product interface
interface Product {
  id: string;
  code: string;
  name: string;
  category: string;
  quantity: number;
}

// Size option interface
interface SizeOption {
  label: string;
  value: string;
}

export default function ProductTableDemo() {
  // Hardcoded products data
  const hardcodedProducts: Product[] = [
    { 
      id: '1', 
      code: 'P001', 
      name: 'Laptop', 
      category: 'Electronics', 
      quantity: 10 
    },
    { 
      id: '2', 
      code: 'P002', 
      name: 'Smartphone', 
      category: 'Electronics', 
      quantity: 15 
    },
    { 
      id: '3', 
      code: 'P003', 
      name: 'Headphones', 
      category: 'Accessories', 
      quantity: 20 
    },
    { 
      id: '4', 
      code: 'P004', 
      name: 'Tablet', 
      category: 'Electronics', 
      quantity: 8 
    },
    { 
      id: '5', 
      code: 'P005', 
      name: 'Smartwatch', 
      category: 'Wearables', 
      quantity: 12 
    }
  ];

  // Size options
  const sizeOptions: SizeOption[] = [
    { label: 'Small', value: 'small' },
    { label: 'Normal', value: 'normal' },
    { label: 'Large', value: 'large' }
  ];

  // State for table size
  const [size, setSize] = useState<string>(sizeOptions[1].value);

  return (
    <div className="card">
      <div className="flex justify-content-center mb-4">
        <SelectButton 
          value={size} 
          onChange={(e: SelectButtonChangeEvent) => setSize(e.value)} 
          options={sizeOptions} 
        />
      </div>
      <DataTable 
        value={hardcodedProducts} 
        size={size} 
        tableStyle={{ minWidth: '50rem' }}
      >
        <Column field="code" header="Code"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="quantity" header="Quantity"></Column>
      </DataTable>
    </div>
  );
}