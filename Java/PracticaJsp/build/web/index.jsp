<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <h1>Hola mundo, es mi primera creacion de JSP</h1>
        <form method="post" action="ServletPrueba">
            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" id="nombre">
            <label for="apellido">Apellido</label>
            <input type="text" name="apellido" id="apellido">
            <label for="DNI">DNI</label>
            <input type="text" name="DNI" id="DNI">
            <label for="telefono">telefono</label>
            <input type="text" name="telefono" id="telefono">
            <button type="submit">Enviar</button>
        </form>
        <h2>Ver lista de personas</h2>
        <form method="GET" action="ServletPrueba">
            <label>Presione el boton para ver la lista de personas</label>
            <input type="submit" name="ver" value="ver">
        </form>
    </body>
</html>
