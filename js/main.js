$(document).ready(function(){
    //slider superior tomando id de div
    var banner = {
        father: $('#banner'),
        numSlides: $('#banner').children('.slide').length,
        position: 1
    };
    //slider inferior tomando id de article
    var inf = {
        father: $('#inf'),
        numSlides: $('#inf').children('.slide').length,
        position: 1
    };
    //para slider superior
    banner.father.children('.slide').first().css({
        'left': 0
    });
    //para slider inferior
    inf.father.children('.slide').first().css({
        'left': 0
    });
    //de uso para slider superior
    var highBanner = function(){
        var high = banner.father.children('.slide').outerHeight();
        banner.father.css({
            'height': high + 'px'
        });
    };
    //de uso para slider inferior
    var highInf = function(){
        var high = inf.father.children('.active').outerHeight();
        inf.father.animate({
            'height': high + 'px'
        });
    }
    var highContainer = function(){
        var highWindow = $(window).height();
        if (highWindow <= $('#container').outerHeight() + 200){
            $('#container').css({
                'height': ''
            });
        } else{
            $('#container').css({
                'height' : highWindow + 'px'
            });
        }
    }
    //para slider superior
    highBanner();
    //para slider inferior
    highInf();
    highContainer();
    $(window).resize(function(){
        highBanner();
        highInf();
        highContainer();
    });
    //Para efecto de animación en botones al cambiar slide
    $('#inf').children('.slide').each(function(){
        $('#buttons').append('<span>');
    });
    $('#buttons').children('span').first().addClass('active');
    
    //-------------------------------------------------
    //-------BANNER
    //-------------------------------------------------
    
    //----------Boton siguiente
    $('#bnext').on('click', function(e){
        e.preventDefault();
        if(banner.position < banner.numSlides){
            //Para asegurar que las slides inicien por la derecha
            banner.father.children().not('.active').css({
                'left': '100%'
            });
                //Poner la clase active en la imagen siguiente para crear animación
                $('#banner .active').removeClass('active').next().addClass('active').animate({
                    'left': '0'
                });
                    //Se anima la imagen anterior simulando se mueve a la izquierda
                    $('#banner .active').prev().animate({
                        'left': '-100%'
                    });
                        banner.position = banner.position + 1;
        } else{
            //Realiza efecto de imagen hacia la derecha en el elemento final
            $('#banner .active').animate({
                'left':'-100%'
            });
                //seleccionar y mover a la derecha los elementos sin la clase active
                banner.father.children().not('.active').css({
                    'left': '100%'
                });
                    //Mueve la clase active del ultimo elemento  al primero
                    $('#banner .active').removeClass('active');
                    banner.father.children('.slide').first().addClass('active').animate({
                        'left': 0
                    });
                        banner.position = 1;
        }
    });
    
    //----------Boton anterior
    $('#bprev').on('click', function(e){
       e.preventDefault();
       if(banner.position > 1){
           banner.father.children().not('.active').css({
           'left': '-100%'
            });
                $('#banner .active').animate({
                    'left': '100%'
                });
                    $('#banner .active').removeClass('active').prev().addClass('active').animate({
                        'left': 0
                    });
                    banner.position = banner.position -1;
       } else{
           banner.father.children().not('.active').css({
               'left':'-100%'
           });
           $('#banner .active').animate({
               'left':'100%'
           });
           $('#banner .active').removeClass('active');
           banner.father.children().last().addClass('active').animate({
               'left': 0
           });
           banner.position = banner.numSlides;
       }
       
    });

    //-------------------------------------------------
    //-------INFO
    //-------------------------------------------------
    
    //----------Boton siguiente
    $('#inext').on('click', function(e){
        e.preventDefault();
        if(inf.position < inf.numSlides){
            //Para asegurar que las slides inicien por la derecha
            inf.father.children().not('.active').css({
                'left': '100%'
            });
                //Poner la clase active en la imagen siguiente para crear animación
                $('#inf .active').removeClass('active').next().addClass('active').animate({
                    'left': '0'
                });
                    //Se anima la imagen anterior simulando se mueve a la izquierda
                    $('#inf .active').prev().animate({
                        'left': '-100%'
                    });
                    
                        $('#buttons').children('.active').removeClass('active').next().addClass('active');
                        inf.position = inf.position + 1;
        } else{
            //Realiza efecto de imagen hacia la derecha en el elemento final
            $('#inf .active').animate({
                'left':'-100%'
            });
                //seleccionar y mover a la derecha los elementos sin la clase active
                inf.father.children().not('.active').css({
                    'left': '100%'
                });
                    //Mueve la clase active del ultimo elemento  al primero
                    $('#inf .active').removeClass('active');
                    inf.father.children('.slide').first().addClass('active').animate({
                        'left': 0
                    });
                        $('#buttons').children('.active').removeClass('active');
                        $('#buttons').children('span').first().addClass('active');
                        inf.position = 1;
        }
        highInf();
    });
    
    //----------Boton anterior
    $('#iprev').on('click', function(e){
       e.preventDefault();
       if(inf.position > 1){
           inf.father.children().not('.active').css({
           'left': '-100%'
            });
                $('#inf .active').animate({
                    'left': '100%'
                });
                    $('#inf .active').removeClass('active').prev().addClass('active').animate({
                        'left': 0
                    });
                        $('#buttons').children('.active').removeClass('active').prev().addClass('active');
                        inf.position = banner.position -1;
       } else{
           inf.father.children().not('.active').css({
               'left':'-100%'
           });
           $('#inf .active').animate({
               'left':'100%'
           });
           $('#inf .active').removeClass('active');
           inf.father.children().last().addClass('active').animate({
               'left': 0
           });
           
            $('#buttons').children('.active').removeClass('active');
            $('#buttons').children('span').last().addClass('active');
            
            inf.position = inf.numSlides;
       }
       highInf();
    });
});


