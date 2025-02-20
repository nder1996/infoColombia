import axios from 'axios';
interface Tarea {
    id?: number;
    titulo: string;
    descripcion: string;
    estado: string;
  }

  export class GestionTareas{
    static async obtenerTareas(): Promise<Tarea[]> {
        try {
          const respuesta = await axios.get(this.baseUrl);
          return respuesta.data;
        } catch (error) {
          console.error('Error al obtener tareas:', error);
          return [];
        }
      }
  }