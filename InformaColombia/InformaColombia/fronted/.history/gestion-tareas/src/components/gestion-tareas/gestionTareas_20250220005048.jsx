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

  const probarAxiosDirecto = async () => {
    try {
      const axios = require('axios');
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
      console.log('Axios funciona:', response.data);
    } catch (error) {
      console.error('Error con axios:', error);
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