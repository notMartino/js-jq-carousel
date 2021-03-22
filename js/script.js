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



function init(){
    // Click avanti
    $('#right-arrow').click(nextImg);
    $('#left-arrow').click(prevImg);
}

$(document).ready(init);
