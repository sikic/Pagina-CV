const express = require("express");
const app =  express();
const path =  require("path");

//definimos el motor de vistas que vamos a usar
app.set("view engine","ejs");
app.set(path.join(__dirname,"views"));


//usamos el middleware static
app.use(express.static(path.join(__dirname,"public")));
app.get("/inicio",function(request,response){
    response.render("inicio");
});

app.get("/datosPersonales",function(request,response){
    response.render("datosPersonales");
});

app.get("/idiomas",function(request,response){
    response.render("idiomas");
});
app.listen(3000, function (err) {
    if (err) {
        console.error("No se pudo inicializar el servidor: "
            + err.message);
    } else {
        console.log("Servidor arrancado en el puerto 3000");
    }
});