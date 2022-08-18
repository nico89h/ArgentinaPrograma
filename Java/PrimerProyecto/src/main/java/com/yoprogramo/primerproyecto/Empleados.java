package com.yoprogramo.primerproyecto;

public class Empleados {
    private int id;
    private float sueldo;
    private String cargo;
    //contructor
    public Empleados(int id, float sueldo, String cargo) {
        this.id = id;
        this.sueldo = sueldo;
        this.cargo = cargo;
    }
    
    
    //getter y setter

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public float getSueldo() {
        return sueldo;
    }

    public void setSueldo(float sueldo) {
        this.sueldo = sueldo;
    }

    public String getCargo() {
        return cargo;
    }

    public void setCargo(String cargo) {
        this.cargo = cargo;
    }
    //inicio de to strign

    public String DatoEmpleado() {
        return "Datos de su trabajo" + "id=" + id + ", sueldo=" + sueldo + ", cargo=" + cargo + '}';
        //System.out.printIn("Datos de su trabajo" + "id=" + id + ", sueldo=" + sueldo + ", cargo=" + cargo);
    }
    
}
