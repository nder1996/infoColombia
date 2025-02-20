import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { GestionTareasService } from '../../services/gestionTareasService';

const GestionTareas = () => {
  const [tareas, setTareas] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    probarAxios();
  }, []);

  const obtenerTareas = async () => {
    try {
      setLoading(true);
      const tareasObtenidas = await GestionTareasService.obtenerTareas();
      console.log('Tareas obtenidas:', tareasObtenidas);
      if (tareasObtenidas) {
        setTareas(tareasObtenidas);
      }
    } catch (error) {
      console.error('Error al obtener las tareas:', error);
    } finally {
      setLoading(false);
    }
  };

  const probarAxios = async () => {
    try {
      console.log('Iniciando prueba de axios...');
      await GestionTareasService.testAxios();
      console.log('Prueba de axios exitosa');
    } catch (error) {
      console.error('Error en prueba de axios:', error);
    }
  };

  return (
    <div>
      <h1>Gestión de Tareas</h1>
      <div className="mb-3">
        <Button label="Probar Axios" onClick={probarAxios} className="mr-2" />
        <Button label="Cargar Tareas" onClick={obtenerTareas} />
      </div>
      <DataTable value={tareas} tableStyle={{ minWidth: '50rem' }} loading={loading}>
        <Column field="id" header="ID"></Column>
        <Column field="titulo" header="Título"></Column>
        <Column field="descripcion" header="Descripción"></Column>
        <Column field="estado" header="Estado"></Column>
      </DataTable>
    </div>
  );
};

export default GestionTareas;