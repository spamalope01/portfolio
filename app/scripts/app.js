$(window).scroll(function() {
  var scroll = $(window).scrollTop();

  if (scroll >= 100) {
    $('.stickyNav').addClass('darkNav');
  } else {
    $('.stickyNav').removeClass('darkNav');
  }
});


// $('.other-links a').first().delay(100).animate({'opacity':'1'},600);
// $('.other-links a').last().delay(400).animate({'opacity':'1'},600);
$('.heroFirst').delay(600).animate({'opacity':'1'},1500);
$('.heroSecond').delay(1000).animate({'opacity':'1'},1500);
$('.heroThird').delay(1300).animate({'marginTop':'+=-80px','opacity':'1'},800);
