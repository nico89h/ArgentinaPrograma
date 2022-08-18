<%-- 
    Document   : mostrarDatos
    Created on : 17 ago. 2022, 11:04:21
    Author     : user
--%>

<%@page import="java.util.List"%>
<%@page import="Clases.PersonasDatos"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>MostrarDatos</title>
    </head>
    <body>
        <h1>Los datos son: </h1>
        <%
            List<PersonasDatos> clientes= (List) request.getSession().getAttribute("ListaClientes");
            int cont=1;
            for (PersonasDatos aux : clientes){
        %>
                <p>Cliente numero: <%=cont%></p>
                <p>Nombre: <%=aux.getNombre()%></p>
                <p>Apellido: <%=aux.getApellido()%></p>
                <p>DNI: <%=aux.getDni()%></p>
                <p>Telefono: <%=aux.getTelefono()%></p>
                <%cont=cont+1;%>
            <%}%>
    </body>
</html>
