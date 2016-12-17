$(document).ready(function(){
	datos();
})

function datos(){

	if($(".page-header").text() == "Ayudantes de Clases"){
		$.getJSON("../data/personal/ayudantesClases.json", function(items){
			items.ayudantes.forEach(function(item){
				$(".container .row").append(
					
					'<div id="ayudante" class="col-lg-4 col-sm-6 text-center"><img class="img-circle img-responsive img-center" src="../img/PersonalMateria/'+item.imagen+'"></img><h3>'+item.nombre+'</h3><p>Correo:'+item.correo+'</p></div>'
					
				);
			});
		})
	}
	if($(".page-header").text() == "Ayudantes de Deberes"){
		$.getJSON("../data/personal/ayudantesDeberes.json", function(items){
			items.ayudantesDeberes.forEach(function(item){
				$(".container .row").append(
					
					'<div id="ayudante" class="col-lg-4 col-sm-6 text-center"><img class="img-circle img-responsive img-center" src="../img/PersonalMateria/'+item.imagen+'"></img><h3>'+item.nombre+'</h3><p>Correo:'+item.correo+'</p></div>'
					
				);
			});
		})
	}

	if($(".page-header").text() == "Profesores"){

		$.getJSON("../data/personal/profesores.json", function(items){
			console.log("??");
			items.profesores.forEach(function(item){
				$(".container .row").append(
					
					'<div id="ayudante" class="col-lg-4 col-sm-6 text-center"><img class="img-circle img-responsive img-center" src="../img/PersonalMateria/'+item.imagen+'"></img><h3>'+item.nombre+'</h3><p>Correo:'+item.correo+'</p><p>Paralelos:'+item.paralelos+'<p></p></div>'
					
				);
			});
		})
	}
	if($(".page-header").text() == "Coordinador"){
		$.getJSON("../data/personal/coordinador.json", function(items){
			items.coordinador.forEach(function(item){
				$(".container .row").append(
					
					'<div id="ayudante" class="col-lg-4 col-sm-6 text-center"><img class="img-circle img-responsive img-center" src="../img/PersonalMateria/'+item.imagen+'"></img><h3>'+item.nombre+'</h3><p>Correo:'+item.correo+'</p></div>'
					
				);
			});
		})
	}
}