var main = function() {
  $('.article').click(function() {
    $('.article').removeClass('current');
    $('.description').hide();

    $(this).addClass('current');
    $(this).children('.description').show();
    $('.container').css("height", "700px"); 
  });
}

$(document).ready(main);
