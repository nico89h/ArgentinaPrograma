/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Project/Maven2/JavaApp/src/main/java/${packagePath}/${mainClassName}.java to edit this template
 */
package com.yoprogramo.primerproyecto;
import java.util.Scanner; //libreria para leet datos
/**
 *
 * @author user
 */
public class PrimerProyecto {

    public static void main(String[] args) {
        //System.out.println("Hello World!");
        /*Personas jose= new Personas("jose", "leal", 1, 123124, "Ingenieroo");
        System.out.println("El sueldo de jose es: "+ jose.getSueldo());
        */
        //inicio de manejo de listas
        Personas arregloPersonas[]= new Personas[2];
        //creo la clase de leer
        Scanner leer= new Scanner(System.in);
        //inicio de el recorrido de cada persona
        String nombre;
        String apellido;
        int Id;
        String cargo;
        float sueldo;
        for (int i = 0; i < 2; i++) {
            System.out.println("Ingrese los datos de la persona numero: "+ i);
            System.out.println("Dame tu nombre de la persona");
            nombre= leer.nextLine();//recibo el nombre de la persona
            System.out.println("Dame tu apellido ");
            apellido=leer.nextLine();
            System.out.println("Dame tu id en la empresa");
            Id=leer.nextInt();
            System.out.println("Dame tu cargo");
            cargo=leer.nextLine();
            System.out.println("Dame el sueldo de la persona");
            sueldo=leer.nextFloat();
            arregloPersonas[i]=new Personas(nombre, apellido, Id, sueldo, cargo);//guarod los valores en los arreglos
        
        }
        //muestro los datos por pantalla
        System.out.println("Los datos de los empleados de la empresa son:"+ arregloPersonas[1].getApellido());
        for (int i = 0; i < 2 ;i++) {
            arregloPersonas[i].Mostrar();
            arregloPersonas[i].DatoEmpleado();
        }
    }
}