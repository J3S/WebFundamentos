$(document).ready(function(){


var url = document.location.toString();
if (url.match('#')) {
	$('.nav-tabs a[href="#'+url.split('#')[1]+'"]').tab('show') ;
	var x = url.substring(url.lastIndexOf('#')+1);
	console.log(x);
	if (url.split('#')[1] == coordinador){
		$.getJSON("../../data/personal/coordinador.json", function(items){
				items.coordinador.forEach(function(item){
					$("#coordinador-materia").append(
						
						'<div id="ayudante" class="col-lg-4 col-md-6 col-sm-12 col-xs-12 text-center"><img class="img-circle img-responsive img-center" src="../../img/PersonalMateria/'+item.imagen+'"></img><h3>'+item.nombre+'</h3><p>Correo:'+item.correo+'</p><p>Oficina:'+item.oficina+'</p></div>'
						
					);
				});
			})
	}
}
$('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
	window.location.hash = e.target.hash;
});




    $('.nav-tabs a[href="#ayudantes-c"]').click(function(){
        $(this).tab('show');
        if($('#ayudantes-clases').html() == "") {
       
	        $.getJSON("../../data/personal/ayudantesClases.json", function(items){
				items.ayudantes.forEach(function(item){
					$("#ayudantes-clases").append(
						
						'<div id="ayudante" class="col-lg-4 col-md-6 col-sm-12 col-xs-12 text-center"><img class="img-circle img-responsive img-center" src="../../img/PersonalMateria/'+item.imagen+'"></img><h3>'+item.nombre+'</h3><p>Correo:'+item.correo+'</p></div>'
						
					);
				});
			})
    	}
    });
    $('.nav-tabs a[href="#ayudantes-d"]').click(function(){
        $(this).tab('show');
        if($('#ayudantes-deberes').html() == "") {
	        $.getJSON("../../data/personal/ayudantesDeberes.json", function(items){
				items.ayudantesDeberes.forEach(function(item){
					$("#ayudantes-deberes").append(
						
						'<div id="ayudante" class="col-lg-4 col-md-6 col-sm-12 col-xs-12 text-center"><img class="img-circle img-responsive img-center" src="../../img/PersonalMateria/'+item.imagen+'"></img><h3>'+item.nombre+'</h3><p>Correo:'+item.correo+'</p></div>'
						
					);
				});
			})
    	}
    });
    $('.nav-tabs a[href="#profesores"]').click(function(){
        $(this).tab('show');
        if($('#profesores-materia').html() == "") {
	        $.getJSON("../../data/personal/profesores.json", function(items){
				console.log(items);
				items.profesores.forEach(function(item){
					$("#profesores-materia").append(
						
						'<div id="ayudante" class="col-lg-4 col-md-6 col-sm-12 col-xs-12 text-center"><img class="img-circle img-responsive img-center" src="../../img/PersonalMateria/'+item.imagen+'"></img><h3>'+item.nombre+'</h3><p>Correo:'+item.correo+'</p><p>Oficina:'+item.Oficina+'</p><p>Paralelos:'+item.paralelos+'<p></p></div>'
						
					);
				});
			})
		}
    });
    $('.nav-tabs a[href="#coordinador"]').click(function(){
        $(this).tab('show');
        if($('#coordinador-materia').html() == "") {
	        $.getJSON("../../data/personal/coordinador.json", function(items){
				items.coordinador.forEach(function(item){
					$("#coordinador-materia").append(
						
						'<div id="ayudante" class="col-lg-4 col-md-6 col-sm-12 col-xs-12 text-center"><img class="img-circle img-responsive img-center" src="../../img/PersonalMateria/'+item.imagen+'"></img><h3>'+item.nombre+'</h3><p>Correo:'+item.correo+'</p><p>Oficina:'+item.oficina+'</p></div>'
						
					);
				});
			})
		}
    });

});





function datos(){

	if($(".page-header").text() == "Ayudantes de Clases"){
		$.getJSON("../../data/personal/ayudantesClases.json", function(items){
			items.ayudantes.forEach(function(item){
				$(".container .row").append(
					
					'<div id="ayudante" class="col-lg-4 col-md-6 col-sm-12 col-xs-12 text-center"><img class="img-circle img-responsive img-center" src="../../img/PersonalMateria/'+item.imagen+'"></img><h3>'+item.nombre+'</h3><p>Correo:'+item.correo+'</p></div>'
					
				);
			});
		})
	}
	if($(".page-header").text() == "Ayudantes de Deberes"){
		$.getJSON("../../data/personal/ayudantesDeberes.json", function(items){
			items.ayudantesDeberes.forEach(function(item){
				$(".container .row").append(
					
					'<div id="ayudante" class="col-lg-4 col-md-6 col-sm-12 col-xs-12 text-center"><img class="img-circle img-responsive img-center" src="../../img/PersonalMateria/'+item.imagen+'"></img><h3>'+item.nombre+'</h3><p>Correo:'+item.correo+'</p></div>'
					
				);
			});
		})
	}

	if($(".page-header").text() == "Profesores"){

		$.getJSON("../../data/personal/profesores.json", function(items){
			console.log(items);
			items.profesores.forEach(function(item){
				$(".container .row").append(
					
					'<div id="ayudante" class="col-lg-4 col-md-6 col-sm-12 col-xs-12 text-center"><img class="img-circle img-responsive img-center" src="../../img/PersonalMateria/'+item.imagen+'"></img><h3>'+item.nombre+'</h3><p>Correo:'+item.correo+'</p><p>Oficina:'+item.Oficina+'</p><p>Paralelos:'+item.paralelos+'<p></p></div>'
					
				);
			});
		})
	}
	if($(".page-header").text() == "Coordinador"){
		$.getJSON("../../data/personal/coordinador.json", function(items){
			items.coordinador.forEach(function(item){
				$(".container .row").append(
					
					'<div id="ayudante" class="col-lg-4 col-md-6 col-sm-12 col-xs-12 text-center"><img class="img-circle img-responsive img-center" src="../../img/PersonalMateria/'+item.imagen+'"></img><h3>'+item.nombre+'</h3><p>Correo:'+item.correo+'</p><p>Oficina:'+item.oficina+'</p></div>'
					
				);
			});
		})
	}
}