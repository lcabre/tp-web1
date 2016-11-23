/* Validacion DOM */ 
function enviar(){
    var error = false;
    var regexp = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
    var num = /^[0-9]/;

    var nombre = document.getElementById("nombre");
    if(!nombre.value || (nombre.value.length<10 || nombre.value.length >20)){
        nombre.nextElementSibling.style.display = "block"; 
        nombre.className ="error";
        error = true;
    }
    else{
        nombre.nextElementSibling.style.display = "none";
        nombre.className ="correcto";
    }

    var dni = document.getElementById("dni");
    if(!dni.value || dni.value.length!=8 || isNaN(dni.value)){
        dni.nextElementSibling.style.display = "block"; 
        dni.className ="error";
        error = true;
    }
    else{
        dni.nextElementSibling.style.display = "none";
        dni.className ="correcto";
    }

    var fecha = document.getElementById("datepicker");
    if(!fecha.value){
        fecha.nextElementSibling.style.display = "block"; 
        fecha.className ="error";
        error = true;
    }
    else{
        fecha.nextElementSibling.style.display = "none";
        fecha.className ="correcto";
    }

    var email = document.getElementById("email");
    if(!email.value || !regexp.test(email.value)){
        email.nextElementSibling.style.display = "block"; 
        email.className ="error";
        error = true;
    }
    else{
        email.nextElementSibling.style.display = "none";
        email.className ="correcto";
    }

    var pass1 = document.getElementById("pass1");
    if( !pass1.value 
        || (pass1.value.length<5 || pass1.value.length >10) 
        || pass1.value.search(/[a-zA-Z]/) == -1 
        || pass1.value.search(/\d/) == -1){
        pass1.nextElementSibling.style.display = "block"; 
        pass1.className ="error";
        error = true;
    }
    else{
        pass1.nextElementSibling.style.display = "none";
        pass1.className ="correcto";
    }

    var pass2 = document.getElementById("pass2");
    if(!pass2.value || pass2.value!=pass1.value || (pass1.value.length<5 || pass1.value.length >10)){
        pass2.nextElementSibling.style.display = "block"; 
        pass2.className ="error";
        error = true;
    }
    else{
        pass2.nextElementSibling.style.display = "none";
        pass2.className ="correcto";
    }

    if (!error) {
        document.form.submit();
    }
}
/* Fin Validacion DOM */

/* Valodacion JQuery */
$(document).ready(function(){
    var regexp = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
    var num = /^[0-9]/;
  
    $( "#formulario" ).submit(function( event ) {
        var error = false;
        var nombre = $("#nombre");   
        if(!nombre.val() || (nombre.val().length<10 || nombre.val().length >20)){
            nombre.next().css("display","block"); 
            nombre.attr('class', 'error');
            error = true;
        }
        else{
            nombre.next().css("display","none");          
            nombre.attr('class', 'correcto');
        }

        var dni = $("#dni"); 
        if(!dni.val() || dni.val().length!=8 || !$.isNumeric(dni.val())){
            dni.next().css("display","block"); 
            dni.attr('class', 'error');
            error = true;
        }
        else{
            dni.next().css("display","none");
            dni.attr('class', 'correcto');
        }

        var fecha = $("#datepicker"); 
        if(!fecha.val()){
            fecha.next().css("display","block"); 
            fecha.attr('class', 'error');
            error = true;
        }
        else{
            fecha.next().css("display","none");
            fecha.attr('class', 'correcto');
        }

        var email = $("#email"); 
        if(!email.val() || !regexp.test(email.val())){
            email.next().css("display","block"); 
            email.attr('class', 'error');
            error = true;
        }
        else{
            email.next().css("display","none");
            email.attr('class', 'correcto');
        }

        var pass1 = $("#pass1"); 
        if( !pass1.val() 
            || (pass1.val().length<5 || pass1.val().length >10) 
            || pass1.val().search(/[a-zA-Z]/) == -1 
            || pass1.val().search(/\d/) == -1){
            pass1.next().css("display","block"); 
            pass1.attr('class', 'error');
            error = true;
        }
        else{
            pass1.next().css("display","none");
            pass1.attr('class', 'correcto');
        }
        
        var pass2 = $("#pass2"); 
        if(!pass2.val() 
            || pass2.val()!=pass1.val() 
            || (pass1.val().length<5 || pass1.val().length >10) 
            || pass1.val().search(/[a-zA-Z]/) == -1 
            || pass1.val().search(/\d/) == -1){
            pass2.next().css("display","block"); 
            pass2.attr('class', 'error');
            error = true;
        }
        else{
            pass2.next().css("display","none");
            pass2.attr('class', 'correcto');
        }
        console.log(error);
        if(error)
            event.preventDefault();
    });
}); 