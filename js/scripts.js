$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
        $('.main-nav').addClass('affix');
        console.log("OK");
    } else {
        $('.main-nav').removeClass('affix');
    }
});

$(window).scroll(function () {
    if ($(document).scrollTop() > 1000) {
        // console.log("OK");
    }
});

function scrollDown() {
    $('html, body').animate({
        scrollTop: $(".middle-section-background").offset().top - 70
    }, 1000);
}
