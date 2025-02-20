import axios from 'axios';

export interface TareasResponse {
    id: number;
    estadoTarea: EstadoTarea;
    usuario: Usuario;
    titulo: string;
    descripcion: string;
    createAt: Date;
    updateAt: Date;
    estado: string;
    vencimientoTarea: Date;
}

export interface EstadoTarea {
    id: number;
    nombre: string;
}

export interface Usuario {
    id: number;
    nombre: string;
}

  export class GestionTareas{

    private static baseUrl = 'http://localhost:8700/api/tarea/';

    static async obtenerTareas(): Promise<TareasResponse[]> {
        try {
          const respuesta = await axios.get(this.baseUrl + 'tareas');
          return respuesta.data;
        } catch (error) {
          console.error('Error al obtener tareas:', error);
          return [];
        }
      }
  }