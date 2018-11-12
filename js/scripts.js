function getCookie(name) {
    const v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
}

function deleteCookie(name){
    window.document.cookie = name+'=; path=/ ;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function selectSection(section){
    $('section').each(function() {
        $(this).addClass('invisibility');
    });
    section = '#'+section;
    $(`${section}`).removeClass('invisibility');
}

$(document).ready(function(){
    const result = getCookie('tokenAPI');

    if (result){
        $('#login-li').addClass('invisibility');
        $('#registro-li').addClass('invisibility');
    }else{
        $('#logout-li').addClass('invisibility');
        $('#reservar-li').addClass('invisibility');
    }


    $('.nav a').on('click', function(){
        $('.nav').find('.active').removeClass('active');
        $(this).parent().addClass('active');
    });


    $('#servicios-link').click(function () {
        selectSection('servicios');
    });

    $('#instalaciones-link').click(function () {
        selectSection('instalaciones');
    });

    $("#registro-link").click(function () {
        selectSection('registro');
    });

    $("#login-link").click(function () {
        selectSection('login');
    });

    $("#btnLogin").click(function () {
        let inputUser = $('#inputUser').val();
        let inputPassword = $('#inputPassword').val();
        if(inputUser === '') {
            $('#emptyUser').removeClass('invisibility');
        }else{
            $('#emptyUser').addClass('invisibility');
        }

        if(inputPassword === ''){
            $('#emptyPassword').removeClass('invisibility');
        }else{
            $('#emptyPassword').addClass('invisibility');
        }

        $.ajax({
            url: 'http://fenw.etsisi.upm.es:5555/users/login?username='+inputUser+'&password='+inputPassword,
            async: true,
            type: 'GET',
            success: function (data, texStatus, request) {
                window.document.cookie = 'tokenAPI='+request.getResponseHeader('Authorization')+'; path=/ ;expires= 01 Dec 2020 00:00:01 GMT;';
                $('#login-li').addClass("invisibility");
                window.document.location.href = 'index.html';
            },
            error: function (e) {
                console.log('ERROR: ' + e);
                $('#wrongUserPassword').removeClass('invisibility');

            }
        });
    });

    $('#logout-link').click(function () {
        deleteCookie('tokenAPI');
        window.document.location.href = 'index.html';
        $('#logout-li').addClass('invisibility');
        $('#reservar-li').addClass('invisibility');
    });
});
