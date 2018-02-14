// When user clicks on close button of modal
  // Modal closes

// When user clicks on about
    //Page scrolls down to About section

// When user clicks on services
    //Page scrolls down to services section

// When user clicks on work
    //Page scrolls down to work section

// When user clicks on contact
    //Page scrolls down to contact section

// When user clicks on individual projects
  // Projects enlarge

  // Hamburger menu
  $('.hamburger').on('click', function() {
    $('.nav-links').toggleClass('menu-open');
  });


  $('.scroll-to').on('click', function(e) {
    // prevent the standard link operation on click
    e.preventDefault();
    // use the href of the link to identify what
    // section to scroll to
    var thisTarget = $(this).attr('href');
    // get that section's top offset
    var targetOffset = $(thisTarget).offset().top;
    // use jQuery.animate() to animate the body's
    // scrollTop to the targetOffest
    $('html, body').animate({
      scrollTop: targetOffset
    }, 600);

  });
