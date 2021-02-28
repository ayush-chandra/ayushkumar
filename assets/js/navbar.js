$(window).scroll(function () {
    if ($(window).scrollTop() >= 100) {
        $('.header-sticky').css('background', 'white');
    } else {
        $('.header-sticky').css('background', 'transparent');
    }
});