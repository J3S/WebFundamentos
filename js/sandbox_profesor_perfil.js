$(document).ready(function() {
    var nombre = $("#nombre");
    var correo = $("#correo");
    var fechaNac = $("#fecha-nac");
    var numResuelto = $("#num-resueltos");
    var nivel = $("#nivel");
    var imagen = $("#imagen");
    $.getJSON("../../../../data/profesores_sandbox/perfil.json", function(data) {
        var nombreData = data.nombre;
        var correoData = data.correo;
        var fechaNacData = data.fechaNac;
        var numResueltoData = data.numEjerciciosAportados;
        var nivelData = data.nivel;
        var imagenData = data.imagen;
        nombre.text(nombreData);
        correo.text(correoData);
        fechaNac.text(fechaNacData);
        numResuelto.text(numResueltoData);
        nivel.text(nivelData);
        imagen.attr('src', imagenData);
    });
});