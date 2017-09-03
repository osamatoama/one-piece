$(document).ready(function () {
    var i = 0
        , imagesLength = 15;
    // slider 
    function slider() {
        i++;
        $('header .slider img').attr('src', 'images/' + i + '.jpg');
        i >= imagesLength ? i = 0 : '';
    }
    // run the slider 
    setInterval(slider, 5000);
    // navbar toggle class 
    $('.navbar li, .about .slider ul li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    // navbar button 
    $('.navbar-toggle').click(function () {
        var open = $(this).data('open');
        if (open === 0) {
            $('nav .navbar ul').css({
                maxHeight: '100%'
            });
            $(this).data('open', 1);
        }
        else {
            $('nav .navbar ul').css({
                maxHeight: '0'
            });
            $(this).data('open', 0);
        }
    });
    $(window).resize(function () {
        console.log($(window).width())
        if ($(window).width() > 767) {
            $('nav .navbar ul').css('max-height', '100%');
        }
        else {
            $('nav .navbar ul').css('max-height', '0');
        }
    });
});