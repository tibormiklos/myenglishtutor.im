$("a.tuition-link").click(function () {
    $('html,body').animate({
        scrollTop: $(".tuition").offset().top
    },
        'slow');
});
$("a.contact-link").click(function () {
    $('html,body').animate({
        scrollTop: $(".contact").offset().top
    },
        'slow');
});