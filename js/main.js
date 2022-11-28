var oldscroll = 0
$(document).ready(function () {
  var count = 1
  var timeout = 50
  $('.header-inner .nav').fadeIn(2000)
  $('.section-hero .section-inner .main-text').fadeIn(2500)
  $('.header-inner .btn-menu').click(function () {
    $('.header-inner .btn-menu').toggleClass('click')
    $('.menu').fadeToggle(300)
    var menutext=parseInt($('.menu-contents .link-block-nav .list-level-2 li p span').css('bottom'))
    if(menutext < 0) {
      $(".menu-contents .link-block-nav .list-level-2 li p span,.menu-contents .link-block-nav .list-level-3 a,.menu-contents .link-block-nav .list-level-2 a,.menu-contents .link-block-nav .list-level-1 a")
        .css('bottom', 0)
    }
    else {
      $(".menu-contents .link-block-nav .list-level-2 li p span,.menu-contents .link-block-nav .list-level-3 a,.menu-contents .link-block-nav .list-level-2 a,.menu-contents .link-block-nav .list-level-1 a").css('bottom', '-50px');
    }
  })
  var interval = setInterval(function () {
    $('.main .copy-main .copy-main-inner .letter' + count++).addClass(
      'animated'
    )
    if (count == 15) {
      clearInterval(interval)
    }
  }, 50)

  //Swiper Slider
  var swiperSelector1 = $('.swiper-container.first-swiper')
  swiperSelector1.each(function (index) {
    var $this = $(this)
    $this.addClass('swiper1-slider-' + index)

    var dragSize = $this.data('drag-size') ? $this.data('drag-size') : 900
    var freeMode = $this.data('free-mode') ? $this.data('free-mode') : false
    var loop = $this.data('loop') ? $this.data('loop') : false
    var slidesDesktop = $this.data('slides-desktop')
      ? $this.data('slides-desktop')
      : 4
    var slidesTablet = $this.data('slides-tablet')
      ? $this.data('slides-tablet')
      : 2.5
    var slidesMobile = $this.data('slides-mobile')
      ? $this.data('slides-mobile')
      : 1.5
    var spaceBetween = $this.data('space-between')
      ? $this.data('space-between')
      : 0

    var swiper1 = new Swiper('.swiper1-slider-' + index, {
      slidesPerView: 'auto',
      spaceBetween: 50,
      freeMode: true,
      spaceBetween: spaceBetween,
      breakpoints: {
        1920: {
          slidesPerView: slidesDesktop
        },
        992: {
          slidesPerView: slidesTablet
        },
        320: {
          slidesPerView: slidesMobile
        }
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        //dragSize: dragSize
        dragSize: 'auto'
      }
    })
  })
  var swiperSelector2 = $('.swiper-container.second-swiper')
  swiperSelector2.each(function (index) {
    var $this = $(this)
    $this.addClass('swiper2-slider-' + index)

    var dragSize = $this.data('drag-size') ? $this.data('drag-size') : 900
    var freeMode = $this.data('free-mode') ? $this.data('free-mode') : false
    var loop = $this.data('loop') ? $this.data('loop') : false
    var slidesDesktop = $this.data('slides-desktop')
      ? $this.data('slides-desktop')
      : 1.5
    var slidesTablet = $this.data('slides-tablet')
      ? $this.data('slides-tablet')
      : 1.5
    var slidesMobile = $this.data('slides-mobile')
      ? $this.data('slides-mobile')
      : 1.5
    var spaceBetween = $this.data('space-between')
      ? $this.data('space-between')
      : 50

    var swiper2 = new Swiper('.swiper2-slider-' + index, {
      slidesPerView: 'auto',
      spaceBetween: 50,
      freeMode: true,
      breakpoints: {
        1920: {
          slidesPerView: slidesDesktop
        },
        992: {
          slidesPerView: slidesTablet
        },
        320: {
          slidesPerView: slidesMobile
        }
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        dragSize: 'auto'
      }
    })
  })
  //swiperSelector1.slideNext();
  //swiperSelector2.slideNext();
  $('.shape-bg .shape-circle-purple').addClass('loading')
  $('.shape-bg .shape-circle-ring-blue').addClass('loading')
  setTimeout(function () {
    $('.shape-bg .shape-circle-purple').addClass('loaded')
    $('.shape-bg .shape-circle-purple').removeClass('loading')
    $('.shape-bg .shape-circle-ring-blue').addClass('loaded')
    $('.shape-bg .shape-circle-ring-blue').removeClass('loading')
  }, 1000)
})
$(window).scroll(function () {
  var newscroll = $(window).scrollTop()

  var heroHeight = $('.section-hero').height()
  var missionHeight = $('.section-mission').height()
  var serveOutHeight = parseInt($('.section-mission').css('margin-top'))
  var service1Height = $(
    '.section-service .service-list .service-01'
  ).outerHeight(true)
  var service2Height = $(
    '.section-service .service-list .service-02'
  ).outerHeight(true)
  var serviceHeight = $('.section-service').outerHeight(true)
  var projectHeight = $('.section-project').outerHeight(true)
  var infoOutHeight = parseInt($('.section-information').css('margin-top'))
  var infotxtHeight = $('.section-information .decoration-text').height()
  var infoHeight = $('.section-information').outerHeight(true)

  var btndisplay = 'block'
  var decotxt0 = parseInt($('.section-hero .copyright span').css('top'))
  var decotxt1 = parseInt($('.section-mission .decoration-text').css('left'))
  var decotxt2 = parseInt($('.section-service .decoration-text').css('right'))
  var movedimg1 = parseInt(
    $('.section-service .service-list .service-01 .img-container img').css(
      'top'
    )
  )
  var movedimg2 = parseInt(
    $('.section-service .service-list .service-02 .img-container img').css(
      'top'
    )
  )
  var info = parseInt($('.section-information .decoration-text').css('right'))
  var project = parseInt($('.section-project .decoration-text').css('left'))
  var jointeam = parseInt($('.section-careers .text-en').css('left'))
  //var contact=parseInt($('.footer-contact .decoration-text').css('left'))
  console.log('window scroll=' + newscroll)
  if (
    oldscroll < newscroll &&
    newscroll >= heroHeight - 250 &&
    newscroll <= heroHeight + 250
  ) {
    decotxt0 = -20
    $('.section-hero .link-block-sns').fadeOut()
  }
  if (oldscroll > newscroll && newscroll < heroHeight + 250) {
    decotxt0 = 0
    $('.section-hero .link-block-sns').fadeIn()
  }
  if (
    oldscroll < newscroll &&
    newscroll >= heroHeight + missionHeight - 650 &&
    newscroll <= heroHeight + missionHeight + 650
  ) {
    decotxt1 += 10
    console.log('mission moved ')
  }
  if (
    oldscroll > newscroll &&
    newscroll >= heroHeight + missionHeight - 650 &&
    newscroll <= heroHeight + missionHeight + 650
  ) {
    decotxt1 -= 10
    console.log('mission moved again')
  }
  if (
    oldscroll < newscroll &&
    newscroll >= heroHeight + missionHeight + serveOutHeight - 350 &&
    newscroll <= heroHeight + missionHeight + serveOutHeight + 350
  ) {
    decotxt2 += 10
    console.log('service moved')
  }
  if (
    oldscroll > newscroll &&
    newscroll >= heroHeight + missionHeight + serveOutHeight - 350 &&
    newscroll <= heroHeight + missionHeight + serveOutHeight + 350
  ) {
    decotxt2 -= 10
    console.log('service moved again')
  }
  if (
    oldscroll < newscroll &&
    newscroll >=
      heroHeight + missionHeight + serveOutHeight + service1Height - 550 &&
    newscroll <=
      heroHeight + missionHeight + serveOutHeight + service1Height + 550
  ) {
    movedimg1 += 10
    console.log('image1 moved')
  }
  if (
    oldscroll > newscroll &&
    newscroll >=
      heroHeight + missionHeight + serveOutHeight + service1Height - 550 &&
    newscroll <=
      heroHeight + missionHeight + serveOutHeight + service1Height + 550
  ) {
    movedimg1 -= 10
    console.log('image1 moved again')
  }
  if (
    oldscroll < newscroll &&
    newscroll >=
      heroHeight +
        missionHeight +
        serveOutHeight +
        service1Height +
        service2Height -
        650 &&
    newscroll <=
      heroHeight +
        missionHeight +
        serveOutHeight +
        service1Height +
        service2Height +
        650
  ) {
    movedimg2 += 10
  }
  if (
    oldscroll > newscroll &&
    newscroll >=
      heroHeight +
        missionHeight +
        serveOutHeight +
        service1Height +
        service2Height -
        650 &&
    newscroll <=
      heroHeight +
        missionHeight +
        serveOutHeight +
        service1Height +
        service2Height +
        650
  ) {
    movedimg2 -= 10
  }
  if (
    oldscroll < newscroll &&
    newscroll >=
      heroHeight +
        missionHeight +
        serviceHeight +
        projectHeight +
        infotxtHeight -
        300 &&
    newscroll <=
      heroHeight +
        missionHeight +
        serviceHeight +
        projectHeight +
        infotxtHeight +
        400
  ) {
    info += 10
    console.log('info moved')
  }
  if (
    oldscroll > newscroll &&
    newscroll >=
      heroHeight +
        missionHeight +
        serviceHeight +
        projectHeight +
        infotxtHeight -
        300 &&
    newscroll <=
      heroHeight +
        missionHeight +
        serviceHeight +
        projectHeight +
        infotxtHeight +
        400
  ) {
    info -= 10
    console.log('info moved again')
  }
  if (
    oldscroll < newscroll &&
    newscroll >= heroHeight + missionHeight + serviceHeight - 300 &&
    newscroll <= heroHeight + missionHeight + serviceHeight + 300
  ) {
    project += 10
    console.log('project moved')
  }
  if (
    oldscroll > newscroll &&
    newscroll >= heroHeight + missionHeight + serviceHeight - 300 &&
    newscroll <= heroHeight + missionHeight + serviceHeight + 300
  ) {
    project -= 10
    console.log('project moved again')
  }
  if (
    oldscroll < newscroll &&
    newscroll >=
      heroHeight +
        missionHeight +
        serviceHeight +
        projectHeight +
        infoHeight -
        300 &&
    newscroll <=
      heroHeight +
        missionHeight +
        serviceHeight +
        projectHeight +
        infoHeight +
        450
  ) {
    jointeam += 5
    console.log('join moved')
  }
  if (
    oldscroll > newscroll &&
    newscroll >=
      heroHeight +
        missionHeight +
        serviceHeight +
        projectHeight +
        infoHeight -
        300 &&
    newscroll <=
      heroHeight +
        missionHeight +
        serviceHeight +
        projectHeight +
        infoHeight +
        450
  ) {
    jointeam -= 5
    console.log('join moved again')
  }

  if (
    newscroll >=
      heroHeight +
        missionHeight +
        serviceHeight -
        $(
          '.section-service .bottom-decoration-text-container .decoration-text-1'
        ).height() *
          2 &&
    newscroll <
      heroHeight +
        missionHeight +
        serviceHeight +
        $(
          '.section-service .bottom-decoration-text-container .decoration-text-1'
        ).height() *
          3
  ) {
    $('.section-service,.section-project,.header-inner').addClass('isblack')
  } else if (
    newscroll <
      heroHeight +
        missionHeight +
        serviceHeight -
        $(
          '.section-service .bottom-decoration-text-container .decoration-text-1'
        ).height() *
          2 ||
    newscroll >=
      heroHeight +
        missionHeight +
        serviceHeight +
        $(
          '.section-service .bottom-decoration-text-container .decoration-text-1'
        ).height() *
          2.8
  ) {
    $('.section-service,.section-project,.header-inner').removeClass('isblack')
  }

  $('.section-hero .copyright span').css('top', decotxt0 + 'px')

  $('.section-mission .decoration-text').css('left', decotxt1 + 'px')
  $('.section-service .decoration-text').css('right', decotxt2 + 'px')
  $('.section-service .service-list .service-01 .img-container img').css(
    'top',
    movedimg1 + 'px'
  )
  $('.section-service .service-list .service-02 .img-container img').css(
    'top',
    movedimg2 + 'px'
  )
  $('.section-information .decoration-text').css('right', info + 'px')
  $('.section-project .decoration-text').css('left', project + 'px')
  $('.section-careers .text-en').css('left', jointeam + 'px')
  //$('.footer-contact .decoration-text').css('left', contact + 'px')
  oldscroll = newscroll
})
