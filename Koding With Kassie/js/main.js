$('.scroll-to').on('click', function(e) {

    e.preventDefault();

    var thisTarget = $(this).attr('href');

    var targetOffset = $(thisTarget).offset().top;

    $('html, body').animate({
      scrollTop: targetOffset
    }, 600);

  });
