$(window).scroll(function() {
  var scroll = $(window).scrollTop();

  if (scroll >= 100) {
    $('.stickyNav').addClass('darkNav');
    $('.logo').css('color', '#000');
    $('.smoothScroll').css('color', '#000');
  } else {
    $('.stickyNav').removeClass('darkNav');
    $('.logo').css('color', '#fff');
    $('.smoothScroll').css('color', '#fff');
  }
});


// $('.other-links a').first().delay(100).animate({'opacity':'1'},600);
// $('.other-links a').last().delay(400).animate({'opacity':'1'},600);
$('.heroText').delay(800).animate({'opacity':'1'},1500);
$('.heroFirst').delay(400).animate({'opacity':'1'},1500);
$('.heroSecond').delay(1200).animate({'opacity':'1'},1500);
$('.heroThird').delay(2000).animate({'marginTop':'+=-80px','opacity':'1'},800);
