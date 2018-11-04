$(document).ready(function(){
    $(".nav a").on("click", function(){
        $(".nav").find(".active").removeClass("active");
        $(this).parent().addClass("active");
    });

    $("#servicios-link").click(function () {
        console.log("Click en servicios-link");
        $("#servicios").removeClass("invisibility");
        $("#instalaciones").addClass("invisibility");
        $("#registro").addClass("invisibility");
        $("#login").addClass("invisibility");
        $("#home").addClass("invisibility");
    });

    $("#instalaciones-link").click(function () {
        console.log("Click en instalaciones-link");
        $("#instalaciones").removeClass("invisibility");
        $("#servicios").addClass("invisibility");
        $("#registro").addClass("invisibility");
        $("#login").addClass("invisibility");
        $("#home").addClass("invisibility");
    });

    $("#registro-link").click(function () {
        console.log("Click en registro-link");
        $("#registro").removeClass("invisibility");
        $("#instalaciones").addClass("invisibility");
        $("#servicios").addClass("invisibility");
        $("#login").addClass("invisibility");
        $("#home").addClass("invisibility");
    });

    $("#login-link").click(function () {
        console.log("Click en login-link");
        $("#login").removeClass("invisibility");
        $("#instalaciones").addClass("invisibility");
        $("#registro").addClass("invisibility");
        $("#home").addClass("invisibility");
    });

    $(function () {
        $(".datepicker").datepicker();
    });

});

