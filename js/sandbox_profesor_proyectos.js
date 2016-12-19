$(document).ready(function() {
    var listaEjercicios = $("#lista-ejercicios");
    $.getJSON("../../../../data/profesores_sandbox/proyectos.json", function(data) {
        var proyectos = data.proyectos;
        var estadisticas = data.ejerciciosDificultad;
        var lista = data.listaEjerciciosDisponibles;
        $.each(proyectos, function(key, value){
            var titulo = value.titulo;
            var descripcion = value.descripcion;
            var etiquetas = value.etiquetas;
            var fechaEntrega = value.fechaEntrega;
            var archivoProyecto = value.archivoProyecto;
            var autor = value.autor;
            var tr = $('<tr></tr>');
            var td1 = $('<td>' + titulo + '</td>'); 
            var td2 = $('<td>' + autor + '</td>'); 
            var td3 = $('<td>' + fechaEntrega + '</td>'); 
            var td4 = $('<td><a target="blank" href="' + archivoProyecto + '">Link</a></td>'); 
            tr.append(td1);
            tr.append(td2);
            tr.append(td3);
            tr.append(td4);
            var strEtiquetas = "";
            var i = 0;
            $.each(etiquetas, function(key, value){
                if (i < etiquetas.length-1) strEtiquetas = strEtiquetas.concat(value.nombre + ", ");
                else strEtiquetas = strEtiquetas.concat(value.nombre);
                i++;
            });
            var td5 = $('<td>' + strEtiquetas + '</td>'); 
            tr.append(td5);
            listaEjercicios.append(tr);
            i++;
        });
        $('#example').DataTable( {
            "language": {
                "lengthMenu": "Mostrar _MENU_ registros por página",
                "zeroRecords": "No se ha encontrado ningún dato",
                "info": "Mostrando página _PAGE_ de _PAGES_",
                "infoEmpty": "Registros no disponibles",
                "infoFiltered": "(filtrado de _MAX_ total records)",
                "sSearch": "Buscar:",
                "oPaginate": {
                  "sFirst": "Primero",
                  "sLast": "Último",
                  "sNext": "Siguiente",
                  "sPrevious": "Anterior",
                }
            },
            "columnDefs": [
                { "orderable": false, "targets"  : [2] }
            ]
        });
    });
});

$("#crear-ejercicio").click(function() {
    window.location.replace("./crear");
});