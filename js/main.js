jQuery(document).ready(function () {
    /* carrusel */
    $(".header-background2").hide();
    $(".header-background3").hide();
    $(".header-background4").hide();
    
    var activo=1;
    var timer = setInterval(cambiarFondo,6500);
    
    function cambiarFondo(){  
        $(".header-background"+activo).fadeOut(1000);
        $("#circle"+activo).removeClass("current");
        if(activo==4)
            activo=1;
        else
            activo++;
        $(".header-background"+activo).fadeIn(1000);
        $("#circle"+activo).addClass("current");
    }

    $("#circle1").click(function() {
        clearInterval(timer); 
        $(".header-background"+activo).fadeOut(1000);
        $("#circle"+activo).removeClass("current");
        $(".header-background1").fadeIn(1000);
        $("#circle1").addClass("current");
        activo=1
        timer = setInterval(cambiarFondo,6500);
    });

    $("#circle2").click(function() {
        clearInterval(timer); 
        $(".header-background"+activo).fadeOut(1000);
        $("#circle"+activo).removeClass("current");
        $(".header-background2").fadeIn(1000);
        $("#circle2").addClass("current");
        activo=2
        timer = setInterval(cambiarFondo,6500);
    });

    $("#circle3").click(function() {
        clearInterval(timer); 
        $(".header-background"+activo).fadeOut(1000);
        $("#circle"+activo).removeClass("current");
        $(".header-background3").fadeIn(1000);
        $("#circle3").addClass("current");
        activo=3
        timer = setInterval(cambiarFondo,6500);
    });

    $("#circle4").click(function() {
        clearInterval(timer); 
        $(".header-background"+activo).fadeOut(1000);
        $("#circle"+activo).removeClass("current");
        $(".header-background4").fadeIn(1000);
        $("#circle4").addClass("current");
        activo=4
        timer = setInterval(cambiarFondo,6500);
    });
    /* fin carrusel */
    
    if($("#datepicker").length){//si existe 
        $( "#datepicker" ).datepicker({
            changeMonth: true,
            changeYear: true,
            dateFormat: "dd-mm-yy",
        });
    }     
});




