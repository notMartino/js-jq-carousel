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
}


function init(){
    // Click avanti
    $('#right-arrow').click(nextImg);
}

$(document).ready(init);
