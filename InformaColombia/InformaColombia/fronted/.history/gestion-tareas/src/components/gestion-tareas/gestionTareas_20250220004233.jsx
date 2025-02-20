import React, { useState, useEffect } from 'react';
import { GestionTareasService, TareasResponse } from '../services/gestionTareasService';

function GestionTareas() {
  const [tareas, setTareas] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    obtenerTareas();
  }, []);

  const obtenerTareas = async () => {
    try {
      // Llamada correcta al método estático
      const resultado = await GestionTareasService.obtenerTareas();
      
      if (resultado) {
       // setTareas(resultado);
      } else {
        setError('No se pudieron cargar las tareas');
      }
    } catch (err) {
      setError('Error al cargar las tareas');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // También puedes probar si axios funciona
  const testAxiosConnection = async () => {
    await GestionTareasService.testAxios();
  };

  if (loading) return <div>Cargando tareas...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Gestión de Tareas</h1>
      <button onClick={testAxiosConnection}>Probar Conexión Axios</button>
      <div className="tareas-container">
        {tareas.length === 0 ? (
          <p>No hay tareas disponibles</p>
        ) : (
          <ul>
            {tareas.map((tarea) => (
              <li key={tarea.id}>
                <h3>{tarea.titulo}</h3>
                <p>{tarea.descripcion}</p>
                <p>Estado: {tarea.estadoTarea.nombre}</p>
                <p>Asignado a: {tarea.usuario.nombre}</p>
                <p>Vence: {new Date(tarea.vencimientoTarea).toLocaleDateString()}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default GestionTareas;