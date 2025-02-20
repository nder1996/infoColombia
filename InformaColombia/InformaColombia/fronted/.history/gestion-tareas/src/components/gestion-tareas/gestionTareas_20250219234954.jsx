import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { GestionTareasService } from '';


const GestionTareas = () => {
  const [tareas, setTareas] = useState([
    { id: 1, titulo: 'Comprar víveres', descripcion: 'Lista del supermercado', estado: 'Pendiente' },
    { id: 2, titulo: 'Llamar al cliente', descripcion: 'Seguimiento de proyecto', estado: 'En progreso' },
    { id: 3, titulo: 'Preparar informe', descripcion: 'Reporte mensual', estado: 'Completado' }
  ]);

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