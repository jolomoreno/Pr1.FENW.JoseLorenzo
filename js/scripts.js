function getCookie(name) {
    const v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
}

$(document).ready(function(){
    const result = getCookie('tokenAPI');

    console.log(result , '<<<< RESULT');

    if (result){
        $('#login-li').addClass('invisibility');
    }else{
        $('#logout-li').addClass('invisibility');
        $('#reservar-li').addClass('invisibility');
    }


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
        $("#wrongUserPassword").addClass("invisibility");
    });

    $("#instalaciones-link").click(function () {
        $("#instalaciones").removeClass("invisibility");
        $("#servicios").addClass("invisibility");
        $("#registro").addClass("invisibility");
        $("#login").addClass("invisibility");
        $("#home").addClass("invisibility");
        $("#emptyUser").addClass("invisibility");
        $("#emptyPassword").addClass("invisibility");
        $("#wrongUserPassword").addClass("invisibility");
    });

    $("#registro-link").click(function () {
        $("#registro").removeClass("invisibility");
        $("#instalaciones").addClass("invisibility");
        $("#servicios").addClass("invisibility");
        $("#login").addClass("invisibility");
        $("#home").addClass("invisibility");
        $("#emptyUser").addClass("invisibility");
        $("#emptyPassword").addClass("invisibility");
        $("#wrongUserPassword").addClass("invisibility");
    });

    $("#login-link").click(function () {
        $("#login").removeClass("invisibility");
        $("#instalaciones").addClass("invisibility");
        $("#registro").addClass("invisibility");
        $("#home").addClass("invisibility");
        $("#servicios").addClass("invisibility");
        $("#emptyUser").addClass("invisibility");
        $("#emptyPassword").addClass("invisibility");
        $("#wrongUserPassword").addClass("invisibility");
    });

    $("#btnLogin").click(function () {
        let inputUser = $("#inputUser").val();
        let inputPassword = $("#inputPassword").val();
        if(inputUser === "") {
            $("#emptyUser").removeClass("invisibility");
        }else{
            $("#emptyUser").addClass("invisibility");
        }

        if(inputPassword === ''){
            $('#emptyPassword').removeClass('invisibility');
        }else{
            $('#emptyPassword').addClass('invisibility');
        }

        console.log('User: ' + inputUser);
        console.log('Password: ' + inputPassword);

        $.ajax({
            url: 'http://fenw.etsisi.upm.es:5555/users/login?username='+inputUser+'&password='+inputPassword,
            async: true,
            type: 'GET',
            success: function (data, texStatus, request) {
                console.log('DATA: '+ data);
                console.log('STATUS: '+ texStatus);
                console.log('Authorization: '+ request.getResponseHeader('Authorization'));
                window.document.cookie = 'tokenAPI='+request.getResponseHeader('Authorization')+'; path=/ ;expires= 01 Dec 2020 00:00:01 GMT;';
                $('#login-li').addClass("invisibility");
                window.document.location.href = 'index.html';
            },
            error: function (e) {
                console.log('ERROR: ' + e);
                $('#wrongUserPassword').removeClass("invisibility");

            }
        });
    });

    $('#logout-link').click(function () {
        console.log(window.document.cookie);
        window.document.cookie = 'tokenAPI=; path=/ ;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        window.document.location.href = 'index.html';
        $('#logout-li').addClass('invisibility');
        $('#reservar-li').addClass('invisibility');
    });
});
