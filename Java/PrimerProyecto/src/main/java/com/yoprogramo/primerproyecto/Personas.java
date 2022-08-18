package com.yoprogramo.primerproyecto;

public class Personas extends Empleados{
    private String nombre;
    private String apellido;
    //genero el contructor de mi clase
    
    public Personas(String nombre, String apellido, int id, float sueldo, String cargo) {
        super(id, sueldo, cargo);
        this.nombre = nombre;
        this.apellido = apellido;
    }
    
    //getter y setters
    
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }
    //INICIO DE TO STRING

    public String Mostrar() {
        return "Dato de la persona" + "nombre=" + nombre + ", apellido=" + apellido + '}';
    }
    
}
