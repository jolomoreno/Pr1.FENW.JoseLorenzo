$(document).ready(function(){
    $(".nav a").on("click", function(){
        $(".nav").find(".active").removeClass("active");
        $(this).parent().addClass("active");
    });

    $("#servicios-link").click(function () {
        $("#servicios").removeClass("invisibility");
        $("#instalaciones").addClass("invisibility");
        $("#registro").addClass("invisibility");
        $("#login").addClass("invisibility");
        $("#home").addClass("invisibility");
    });

    $("#instalaciones-link").click(function () {
        $("#instalaciones").removeClass("invisibility");
        $("#servicios").addClass("invisibility");
        $("#registro").addClass("invisibility");
        $("#login").addClass("invisibility");
        $("#home").addClass("invisibility");
    });

    $("#registro-link").click(function () {
        $("#registro").removeClass("invisibility");
        $("#instalaciones").addClass("invisibility");
        $("#servicios").addClass("invisibility");
        $("#login").addClass("invisibility");
        $("#home").addClass("invisibility");
    });

    $("#login-link").click(function () {
        $("#login").removeClass("invisibility");
        $("#instalaciones").addClass("invisibility");
        $("#registro").addClass("invisibility");
        $("#home").addClass("invisibility");
        $("#servicios").addClass("invisibility");
    });

    /*$(function () {
        $(".datepicker").datepicker();
    });*/

    $("#btnLogin").click(function () {
        let inputUser = $("#inputUser").val();
        let inputPassword = $("#inputPassword").val();
        if(inputUser === "") {
            $("#emptyUser").removeClass("invisibility");
        }else{
            $("#emptyUser").addClass("invisibility");
        }

        if(inputPassword === ""){
            $("#emptyPassword").removeClass("invisibility");
        }else{
            $("#emptyPassword").addClass("invisibility");
        }

        console.log("User: " + inputUser);
        console.log("Password: " + inputPassword);

        $.ajax({
            url: "http://fenw.etsisi.upm.es:5555/users/login?username="+inputUser+"&password="+inputPassword,
            async: true,
            type: "GET",
            success: function (data) {
                console.log("EXITO: "+ data);
            },
            error: function (e) {
                console.log("ERROR: " + e);
            }
        });
    });

});

