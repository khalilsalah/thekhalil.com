var $logo = $('#logo');
var $footer = $('#footer');
var $goToTop = $('#goToTop');
var $myCV = $('#myCV');
var $window = $(window);
var $cv = $('div#cv');

var headerOffsetTop = $logo.offset().top;
$(document).ready(function () {
    $logo.hide();
    $goToTop.hide();
    $footer.hide();
    $('#head-intro').delay(1000).fadeOut().promise().done(function () {
        $('#head-title').fadeIn();
        if ($window.scrollTop() < headerOffsetTop) {
            $footer.fadeIn();
        }
    });
    $('h1,h3,div:contains("Khalil")').each(function () {
        if ($(this).children().length < 1) {
            var content = $(this).html();
            $(this).html(content.replace('Khalil', '<span class="accent">K</span>halil'));
        }
    });

    $goToTop.click(function () {
        $("html, body").animate({ scrollTop: 0 }, 200);
    });

    $myCV.click(function () {
        $cv.fadeIn();
        $([document.documentElement, document.body]).animate({
            scrollTop: $cv.offset().top
        }, 200);

    });

});
$window.scroll(function () {
    var scrollTop = $window.scrollTop();
    if (scrollTop + 400 >= headerOffsetTop) {
        $logo.addClass('sticky-top-bar');
        $logo.fadeIn();
        $footer.fadeOut();
        $goToTop.fadeIn();
    }
    else {
        $logo.fadeOut();
        $footer.fadeIn();
        $goToTop.fadeOut();
    }
    if (scrollTop == 0)
        $cv.hide();

});



