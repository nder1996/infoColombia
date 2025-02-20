import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { GestionTareasService } from '../services/GestionTareasService';


const GestionTareas = () => {
    const [tareas, setTareas] = useState([]);

  return (
    <div>
      <h1>Gestión de Tareas</h1>
      <DataTable value={tareas} tableStyle={{ minWidth: '50rem' }}>
        <Column field="id" header="ID"></Column>
        <Column field="titulo" header="Título"></Column>
        <Column field="descripcion" header="Descripción"></Column>
        <Column field="estado" header="Estado"></Column>
      </DataTable>
    </div>
  );
};

export default GestionTareas;