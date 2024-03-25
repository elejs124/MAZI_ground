


$(document).ready(function() {
    init();
});

function init() {
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        var sectionOffset = $('.page_index').offset().top;
        if (scrollTop >= sectionOffset) {
        // 함수 실행
            $('.floating_page').addClass('floating_page_fixed');
        } else {
            $('.floating_page').removeClass('floating_page_fixed');
        }
    });
}