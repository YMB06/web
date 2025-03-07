     //esto es para que no se envie el formulario por defecto y se haga la comprobacion 
     document.getElementById("enviar").addEventListener("click", function (event) {
        var nombre = document.getElementById("nombre").value;
        var apellidos = document.getElementById("apellidos").value;
        var email = document.getElementById("email").value;
        var telefono = document.getElementById("telefono").value;
        var mensaje = document.getElementById("mensaje").value;
    });
    //comprobacion del correo
    document.getElementById("email").addEventListener("input", function (event) {
        var email = document.getElementById("email").value;
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            document.getElementById("email").setCustomValidity("El email no es correcto");
        } else {
            document.getElementById("email").setCustomValidity("");
        }
    });
    //comprobacion del telefono
    document.getElementById("telefono").addEventListener("input", function (event) {
        var telefono = document.getElementById("telefono").value;
        var telefonoPattern = /^\+\d{2}\s\d{3}\s\d{2}\s\d{2}\s\d{2}$/;
        if (!telefonoPattern.test(telefono)) {
            document.getElementById("telefono").setCustomValidity("El telefono no es correcto");
        } else {
            document.getElementById("telefono").setCustomValidity("");
        }
    });