
$(function () {
    new WOW().init();
   $(document).scroll(function () {
        var top = $(document).scrollTop();
        //console.log(top);
        if (top > 400) {
            $('.back-top').addClass('active');

            //$('.back-top').fadeIn();
        } else {
            $('.back-top').removeClass('active');

            //$('.back-top').fadeOut();
        }

    })

    $('.back-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });
 
});