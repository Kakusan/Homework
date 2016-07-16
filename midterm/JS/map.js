var main = function() {
    $('.map_info').hover(function() {
        $(this).find("div").fadeIn(0).addClass('active-map_info_pop_up');
    }, function() {
        $('.active-map_info_pop_up').fadeOut(0).removeClass('active-map_info_pop_up');
    });
}

$(document).ready(main);
