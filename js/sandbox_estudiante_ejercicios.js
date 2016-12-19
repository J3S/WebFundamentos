$(document).ready(function() {
    var divEjerciciosDificultad = $("#ejercicios-dificultad-estadistica");
    var listaEjercicios = $("#lista-ejercicios");
    $.getJSON("../../../../data/estudiantes_sandbox/ejercicios.json", function(data) {
        var estadísticas = data.ejerciciosDificultad;
        var lista = data.listaEjerciciosDisponibles;
        var i = 0;
        $.each(estadísticas, function(key, value){
            var divCol = $('<div class="col-xs-12 col-sm-6 col-md-4"></div>');
            var box = $(' <div class="info-box ' + value.color + '"></div>');
            var span = $('<span class="info-box-icon"><i class="' + value.icon + '"></i></span>');
            var boxContent = $('<div class="info-box-content"></div>');
            var boxContentText = $('<span class="info-box-text">' + value.dificultad + '</span>');
            var boxContentNumber = $('<span class="info-box-number">' + lista[i].lista.length + '</span>');
            var boxContentProgress = $('<div class="progress"><div class="progress-bar" style="width: ' + value.porcentajeResuelto + '%"></div></div><span class="progress-description">' + value.porcentajeResuelto + '% resueltos</span>');
            boxContent.append(boxContentText);
            boxContent.append(boxContentNumber);
            boxContent.append(boxContentProgress);
            box.append(span);
            box.append(boxContent);
            divCol.append(box);
            divEjerciciosDificultad.append(divCol);
            i++;
        });
        i = 0;
        $.each(lista, function(key, value){
            var nivel = value.nivel;
            var listaNivel = value.lista;
            $.each(listaNivel, function(key, value){
                var tr = $('<tr></tr>');
                var td1 = $('<td>' + value.titulo + '</td>'); 
                var td2 = $('<td>' + value.autor + '</td>'); 
                var td3 = $('<td><span class="badge ' + estadísticas[i].color + '">' + nivel + '</span></td>'); 
                tr.append(td1);
                tr.append(td2);
                tr.append(td3);
                listaEjercicios.append(tr);
            });
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
                  "sPrevious": "Anterior"
                }
            }
        });
        var table = $('#example').DataTable();
        $('#example tbody').on('click', 'tr', function () {
            window.location.replace("../ejercicio");
            var data = table.row(this).data();
            console.log(data);
        });
    });
});