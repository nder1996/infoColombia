package FullStack.InformaColombia.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EstadoTarea {

    private Integer id;
    private String nombre;
    private String descripcion;
    private String estado;
}
