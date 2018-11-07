$(document).ready(function(){
    window.document.cookie = "PRUEBA=PRUEBA; path=/";
    console.log(window.document.cookie);

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
        $("#emptyUser").addClass("invisibility");
        $("#emptyPassword").addClass("invisibility");
    });

    $("#instalaciones-link").click(function () {
        $("#instalaciones").removeClass("invisibility");
        $("#servicios").addClass("invisibility");
        $("#registro").addClass("invisibility");
        $("#login").addClass("invisibility");
        $("#home").addClass("invisibility");
        $("#emptyUser").addClass("invisibility");
        $("#emptyPassword").addClass("invisibility");
    });

    $("#registro-link").click(function () {
        $("#registro").removeClass("invisibility");
        $("#instalaciones").addClass("invisibility");
        $("#servicios").addClass("invisibility");
        $("#login").addClass("invisibility");
        $("#home").addClass("invisibility");
        $("#emptyUser").addClass("invisibility");
        $("#emptyPassword").addClass("invisibility");
    });

    $("#login-link").click(function () {
        $("#login").removeClass("invisibility");
        $("#instalaciones").addClass("invisibility");
        $("#registro").addClass("invisibility");
        $("#home").addClass("invisibility");
        $("#servicios").addClass("invisibility");
        $("#emptyUser").addClass("invisibility");
        $("#emptyPassword").addClass("invisibility");
    });

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
            success: function (data, texStatus, request) {
                console.log("DATA: "+ data);
                console.log("STATUS: "+ texStatus);
                console.log("Authorization: "+ request.getResponseHeader("Authorization"));
                window.document.cookie = "tokenAPI="+request.getResponseHeader("Authorization")+"; path=/";
                console.log(window.document.cookie);
            },
            error: function (e) {
                console.log("ERROR: " + e);
            }
        });


    });

});
