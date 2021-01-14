$(function () {
  // Content height
  var header = $('header').outerHeight();
  var nav = $('nav').outerHeight();
  var footer = $('footer').outerHeight();
  var footer_up = $('.footer-up').outerHeight();
  var contentValHeight = header  + footer;
  var pages = nav + footer_up + footer;
  $('.main-coursatc').css('min-height', "calc(100vh - ".concat(contentValHeight, "px)"));
  $('.max-coursatc').css('max-height', "calc(100vh - ".concat(contentValHeight, "px)" ));
  $('.pages').css('min-height', "calc(100vh - ".concat(pages, "px)" ));
  // toggle between form of captcha page 
  $('#importManually').click(function () {
    $('.automated').addClass('d-none')
    $('.manually').removeClass('d-none')
  })
  $('#import').click(function () {
    $('.automated').removeClass('d-none')
    $('.manually').addClass('d-none')
  })

  // My Course
  $(document).on('click', '.crs-end', function () {
    $('.widget-1').removeClass('d-none').siblings().addClass('d-none');
    $(this).addClass('active').parent().siblings().find('button').removeClass('active');
  })
  $(document).on('click', '.crs-now', function () {
    $('.widget-2').removeClass('d-none').siblings().addClass('d-none');
    $(this).addClass('active').parent().siblings().find('button').removeClass('active');
  })
  $(document).on('click', '.crs-will', function () {
    $('.widget-3').removeClass('d-none').siblings().addClass('d-none');
    $(this).addClass('active').parent().siblings().find('button').removeClass('active');
  })

  // show password 
  $(document).on('click', '.eye', function () {
    if ($(this).hasClass('fa-eye-slash')) {
      $(this).removeClass('fa-eye-slash').addClass('fa-eye');
      $('.pass-input').attr('type', 'text')
    } else {
      $(this).removeClass('fa-eye').addClass('fa-eye-slash');
      $('.pass-input').attr('type', 'password')
    }
  })



  $(document).on('click', '.swap-cap label', function () {
    console.log('fff');
    $(this).find('.gr-border').css('width', '100%');
    $(this).parent().siblings().find('.gr-border').css('width', '0');
  })
  $(document).on('click', '.new-acc', function () {
    $('#import').click()
  });


  $(document).on('click', '.courses-controls button', function () {
    var myClass = $(this).attr('id');
    $("." + myClass).removeClass('d-none').siblings().addClass('d-none')
  });


     // Toggel between pargraph and certificate
     $(document).on('click', '.btn-cer-1', function () {
      $('.parg-cer-1').removeClass('d-none');
      $('.img-cer-1').removeClass('d-none');
      $('.parg-cer-2').addClass('d-none');
      $('.img-cer-2').addClass('d-none');
      $(this).addClass('active');
      $('.btn-cer-2').removeClass('active');
    })
    $(document).on('click', '.btn-cer-2', function () {
      $('.parg-cer-2').removeClass('d-none');
      $('.img-cer-2').removeClass('d-none');
      $('.parg-cer-1').addClass('d-none');
      $('.img-cer-1').addClass('d-none');
      $(this).addClass('active');
      $('.btn-cer-1').removeClass('active');
    })
  $('.owl-carousel').owlCarousel({
    loop: false,
    margin: 10,
    center:true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      800: {
        items: 3
      },
      1000: {
        items: 3
      },
      1200: {
        items: 4
      },
      
    }
  })
  $('#adobe .owl-carousel').owlCarousel({
    loop: false,
    margin: 10,
    center:true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      800: {
        items: 3
      },
      1000: {
        items: 5
      },
      1200: {
        items: 5
      },
      
    }
  })

  $('#carousel3 .owl-carousel').owlCarousel({
    loop: false,
    margin: 10,
    center:true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      800: {
        items: 3
      },
      1000: {
        items: 3
      },
      1200: {
        items: 4
      },
      
    }
  })
  // slider nav buttons 
  $('#slider span[aria-label="Previous"]').html('<i class="fas fa-caret-left"></i>');
  $('#slider span[aria-label="Next"]').html('<i class="fas fa-caret-right"></i>');
  $('#adobe span[aria-label="Previous"]').html('<i class="fas fa-chevron-left"></i>');
  $('#adobe span[aria-label="Next"]').html('<i class="fas fa-chevron-right"></i>');
  $('#doctors span[aria-label="Previous"]').html('<i class="fas fa-chevron-left"></i>');
  $('#doctors span[aria-label="Next"]').html('<i class="fas fa-chevron-right"></i>');
  $('#carousel-2').carousel();






});