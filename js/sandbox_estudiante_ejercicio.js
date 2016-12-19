var resultadoCorrecto;

$(document).ready(function() {
    var descripcionDiv = $("#descripcion");
    var etiquetasDiv = $("#etiquetas");
    $.getJSON("../../../../data/estudiantes_sandbox/ejercicio.json", function(data) {
        var titulo = data.titulo;
        var descripcion = data.descripcion;
        var autor = data.autor;
        var porcentaje = data.porcentajeEstudiantes;
        var dificultad = data.dificultad;
        var problema = data.problema;
        resultadoCorrecto = data.resultadoCorrecto;
        $("#info-ejercicio h3").text(titulo);
        descripcionDiv.append($('<label>Descripción</label>'));
       descripcionDiv.append($('<p>' + descripcion + '</p>'));
        descripcionDiv.append($('<label>Autor</label>'));
        descripcionDiv.append($('<p>' + autor + '</p>'));
        etiquetasDiv.append($('<label>Etiquetas</label>'));
        var rowEtiquetas = $('<div class="row"></div>');
        var i = 0;
        var j = 0;
        var col6 = false;
        $.each(data.etiquetas, function(key, value) {
            if (i === 3 || j === 2) {
                col6 = !col6;
                i = 1;
                j = 0;
            } else {
                i++;
            }
            if (col6) {
                j++;
                var etiquetasContainer = $('<div class="col-xs-6 text-center add-margin-top"></div>');
            } else {
                var etiquetasContainer = $('<div class="col-xs-4 text-center add-margin-top"></div>');
            }
            var span = $('<span class="badge bg-red">' + value.nombre + '</span>');
            etiquetasContainer.append(span);
            rowEtiquetas.append(etiquetasContainer);
        });
        etiquetasDiv.append(rowEtiquetas);
        etiquetasDiv.append($('<br>'));
        etiquetasDiv.append($('<label>Resuelto por el ' + porcentaje + '% de los estudiantes</label>'));
        etiquetasDiv.append($('<div class="progress progress-xs progress-striped active"><div class="progress-bar progress-bar-success" style="width: ' + porcentaje + '%"></div></div>'));
        etiquetasDiv.append($('<label>Dificultad</label>'));
        etiquetasDiv.append($('<br>'));
        etiquetasDiv.append($('<span class="badge bg-maroon">' + dificultad + '</span>'));


        var problemaContent = $("#problema-content");
        problemaContent.append($('<p class="add-margin-top">' + problema + '</p>'))
    });
});

// output functions are configurable.  This one just appends some text
// to a pre element.
function outf(text) { 
    var mypre = document.getElementById("output"); 
    mypre.innerHTML = mypre.innerHTML + text; 
} 
function builtinRead(x) {
    if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
            throw "File not found: '" + x + "'";
    return Sk.builtinFiles["files"][x];
}

// Here's everything you need to run a python program in skulpt
// grab the code from your textarea
// get a reference to your pre element for output
// configure the output function
// call Sk.importMainWithBody()
function runit() { 
   var prog = document.getElementById("yourcode").value; 
   var mypre = document.getElementById("output"); 
   mypre.innerHTML = ''; 
   Sk.pre = "output";
   Sk.configure({output:outf, read:builtinRead}); 
   (Sk.TurtleGraphics || (Sk.TurtleGraphics = {})).target = 'mycanvas';
   var myPromise = Sk.misceval.asyncToPromise(function() {
       return Sk.importMainWithBody("<stdin>", false, prog, true);
   });
   myPromise.then(function(mod) {
    if (resultadoCorrecto.toString() === $("pre").html().replace(/^\s+|\s+$/g, '')) {
        $("p").remove('.remove-msg');
        $("#probar-content .col-md-4").append($('<p class="remove-msg text-success">El resultado coincide con la respuesta del ejercicio</p>'))
    } else {
        $("p").remove('.remove-msg');
        $("#probar-content .col-md-4").append($('<p class="remove-msg text-danger">El resultado no coincide con la respuesta del ejercicio</p>'))
    }
   },
       function(err) {
        $("p").remove('.remove-msg');
        $("#probar-content .col-md-4").append($('<p class="remove-msg text-danger">Error:<br>' + err.toString()  + '</p>'))
   });
} 

$('#form-files').submit(function () {
     console.log($("#exampleInputFile").val());
     if ($("#exampleInputFile").val() !== "") {
         $("#alert-message").append('<div class="alert alert-success alert-dismissible fade in"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button><h4><i class="icon fa fa-check"></i> Archivo subido con éxito!</h4></div>');
     } else {
     $("#alert-message").append('<div class="alert alert-danger alert-dismissible fade in"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button><h4><i class="icon fa fa-times"></i> No se ha seleccionado ningún arhivo</h4></div>');
     }
               
     return false;
});