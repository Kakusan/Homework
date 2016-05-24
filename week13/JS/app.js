var main = function() {
  $('.arrow-next').click(function() {
    var currentSliderbox = $('.active-sliderbox');
    var nextSliderbox = currentSliderbox.next();
    var currentDot = $('.active-dot');
    var nextDot = currentDot.next();

    if(nextSliderbox.length === 0) {
      nextSliderbox = $('.sliderbox').first();
      nextDot = $('.dot').first();
    }

    currentSliderbox.fadeOut(500).removeClass('active-sliderbox');
    nextSliderbox.fadeIn(500).addClass('active-sliderbox');
    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');
  });


  $('.arrow-prev').click(function() {
    var currentSliderbox = $('.active-sliderbox');
    var prevSliderbox = currentSliderbox.prev();
    var currentDot = $('.active-dot');
    var prevDot = currentDot.prev();

    if(prevSliderbox.length === 0) {
      prevSliderbox = $('.sliderbox').last();
      prevDot = $('.dot').last();
    }

    currentSliderbox.fadeOut(500).removeClass('active-sliderbox');
    prevSliderbox.fadeIn(500).addClass('active-sliderbox');
    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot');
  });

}

$(document).ready(main);
