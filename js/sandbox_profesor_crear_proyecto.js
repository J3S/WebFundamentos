$(document).ready(function() {
    $.getJSON("../../../../../data/etiquetas.json", function(data) {
        $.each(data.etiqueta, function(key, value) {
            var etiqueta = value.nombre;
            var option = $('<option value="' + etiqueta + '">' + etiqueta + '</option>');
            $("#etiquetas").append(option);
        });
    });
});

$('#form-crear').submit(function () {
    var titulo = $("#titulo").val();
    var descripcion = $("#descripcion").val();
    var divEtiquetasAgregadas = $("#etiquetas-agregadas");
    var archivo = $("#exampleInputFile").val();
    var fecha = $("#fecha").val();
    var camposLlenos = 0;
    if (titulo === "") {
        $("#msg-titulo").removeClass("hidden");
        $("#titulo-group").addClass("has-error");
        if (camposLlenos !== 0) camposLlenos--;
    } else {
        $("#msg-titulo").addClass("hidden");
        $("#titulo-group").removeClass("has-error");
        camposLlenos++;
    }
    if (descripcion === "") {
        $("#msg-descripcion").removeClass("hidden");
        $("#descripcion-group").addClass("has-error");
        if (camposLlenos !== 0) camposLlenos--;
    } else {
        $("#msg-descripcion").addClass("hidden");
        $("#descripcion-group").removeClass("has-error");
        camposLlenos++;
    }
    if (divEtiquetasAgregadas.children().length === 1) {
        $("#msg-etiquetas").removeClass("hidden");
        $("#etiquetas-group").addClass("has-error");
        if (camposLlenos !== 0) camposLlenos--;
    } else {
        $("#msg-etiquetas").addClass("hidden");
        $("#etiquetas-group").removeClass("has-error");
        camposLlenos++;
    }
    if (archivo === "") {
        $("#msg-archivo").removeClass("hidden");
        $("#archivo-group").addClass("has-error");
        if (camposLlenos !== 0) camposLlenos--;
    } else {
        $("#msg-archivo").addClass("hidden");
        $("#archivo-group").removeClass("has-error");
        camposLlenos++;
    }
    if (fecha === "") {
        $("#msg-fecha").removeClass("hidden");
        $("#fecha-group").addClass("has-error");
        if (camposLlenos !== 0) camposLlenos--;
    } else {
        $("#msg-fecha").addClass("hidden");
        $("#fecha-group").removeClass("has-error");
        camposLlenos++;
    }
    if (camposLlenos === 5) {
        window.location.replace("../");
    }
    return false;
});

$("#agregar-etiqueta").click(function() {
    var etiqueta = $("#etiquetas").val();
    var divEtiquetasAgregadas = $("#etiquetas-agregadas");
    if (etiqueta !== "") {
        if(divEtiquetasAgregadas.children().length === 1) {
            var row = $('<div class="row add-margin-top-min" id="div' + etiqueta + '"></div>');
            var label = $('<div class="col-xs-8"><label>' + etiqueta + '</label></div>');
            var button = $('<button type="button" class="btn btn-danger quitar-etiqueta" data-target="div' + etiqueta + '">Quitar</button>');
            row.append(label);
            row.append(button);
            divEtiquetasAgregadas.append(row);
        } else {
            var children = divEtiquetasAgregadas.children();
            var id = "div" + etiqueta;
            var agregado = false;
            for (var i = 1; i < children.length; i++) {
                if (id === children[i].id) agregado = true;
            }
            if (!agregado) {
                var row = $('<div class="row add-margin-top-min" id="div' + etiqueta + '"></div>');
                var label = $('<div class="col-xs-8"><label>' + etiqueta + '</label></div>');
                var button = $('<button type="button" class="btn btn-danger quitar-etiqueta" data-target="div' + etiqueta + '">Quitar</button>');
                row.append(label);
                row.append(button);
                divEtiquetasAgregadas.append(row);
            }
        }
    }
});