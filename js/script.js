// Funzione immagine successiva
function nextImg(){
    var activeImg = $('.active');
    activeImg.removeClass('active');

    if(activeImg.hasClass('lastImg')){
        activeImg = $('.firstImg');
    }else{
        var nextImg = activeImg.next('img');
        activeImg = nextImg;
    }

    activeImg.addClass('active');

    console.log('Immagine attiva: ' + activeImg[0].alt);
}

// Funzione immagine precedente
function prevImg(){
    var activeImg = $('.active');
    activeImg.removeClass('active');

    if(activeImg.hasClass('firstImg')){
        activeImg = $('.lastImg');
    }else{
        var nextImg = activeImg.prev('img');
        activeImg = nextImg;
    }
    
    activeImg.addClass('active');
    console.log('Immagine attiva: ' + activeImg[0].alt);
}

// Funzione cambio immagine via Dots
function clickedDot() {
    var dotNumber = $(this).attr('data-imgPos');

    var activeImg = $('img.active');
    activeImg.removeClass('active');

    activeImg = $('img').eq(dotNumber);
    activeImg.addClass('active');

    var prevDot = $('i.fas');
    prevDot.removeClass('fas');
    prevDot.addClass('far');

    var thisDot = $(this);
    thisDot.removeClass('far');
    thisDot.addClass('fas');
}

function init(){
    // Click avanti
    $('#right-arrow').click(nextImg);
    $('#left-arrow').click(prevImg);

    // Click dots
    $('.dots i').click(clickedDot)
}

$(document).ready(init);
