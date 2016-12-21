$(document).ready(function(){


var url = document.location.toString();
if (url.match('#')) {
	$('.nav-tabs a[href="#'+url.split('#')[1]+'"]').tab('show') ;
	var x = url.substring(url.lastIndexOf('#')+1);
	
	if (x === 'coordinador'){
		$.getJSON("../../data/personal/coordinador.json",{}, function(items){
                                console.log(items);
				items.coordinador.forEach(function(item){
					$("#coordinador-materia").append(
						
						'<div id="ayudante" class="col-lg-4 col-md-6 col-sm-12 col-xs-12 text-center"><img class="img-circle img-responsive img-center" src="../../img/PersonalMateria/'+item.imagen+'"></img><h3>'+item.nombre+'</h3><p>Correo:'+item.correo+'</p><p>Oficina:'+item.oficina+'</p></div>'
						
					);
				});
			})
	}




    $('.nav-tabs a[href="#ayudantes-c"]').click(function(){
        $(this).tab('show');
        if($('#ayudantes-clases').html() == "") {
       
	        $.getJSON("../../data/personal/ayudantesClases.json",{}, function(items){
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
	        $.getJSON("../../data/personal/ayudantesDeberes.json",{}, function(items){
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
	        $.getJSON("../../data/personal/profesores.json",{}, function(items){
				items.profesores.forEach(function(item){
					$("#profesores-materia").append(
						
						'<div id="ayudante" class="col-lg-4 col-md-6 col-sm-12 col-xs-12 text-center"><img class="img-circle img-responsive img-center" src="../../img/PersonalMateria/'+item.imagen+'"></img><h3>'+item.nombre+'</h3><p>Correo:'+item.correo+'</p><p>Oficina:'+item.Oficina+'</p><p>Paralelos:'+item.paralelos+'<p></p></div>'
						
					);
				});
			})
		}
    });
    
  }
});





