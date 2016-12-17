$(document).ready(crearCollapse());

function crearCollapse() {
    var i = 0;
    $.getJSON("../../data/semana/clases.json", function(data) {
        var i = 0;
        $.each(data.semanas, function(key, value) {
            var panelDefault = $('<div class="panel panel-default"></div>');
            var panelHeading = $('<div class="panel-heading" role="tab" id="heading' + i + '"></div>');
            if (i == 0) {
                var panelTitle = $('<h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse' +
                                        i + '" aria-expanded="true" aria-controls="collapse' + i + '">' + "Semana #" + value.numero + " - Capítulo " + value.capitulo + '</a></h4>');
                var panelCollapse = $('<div id="collapse' + i + '" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading' + i + '"></div>');
            } else {
                var panelTitle = $('<h4 class="panel-title"><a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse' +
                                        i + '" aria-expanded="false" aria-controls="collapse' + i + '">' + "Semana #" +value.numero + " - Capítulo " + value.capitulo + '</a></h4>');
                var panelCollapse = $('<div id="collapse' + i + '" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading' + i + '"></div>');
            }
            $.each(value.clases, function(key, valueClase) {
                var panelBody = $('<div class="panel-body"></div>');
                var label = $('<label>Tema: ' + valueClase.tema +'</label>');
                var p = $('<p>' + valueClase.descripcion +'</p>');
                panelBody.append(label);
                panelBody.append(p);
                panelCollapse.append(panelBody);
            });           
            panelHeading.append(panelTitle);
            panelDefault.append(panelHeading);
            panelDefault.append(panelCollapse);
            $("#accordion").append(panelDefault);
            i++;
        });
    });
}