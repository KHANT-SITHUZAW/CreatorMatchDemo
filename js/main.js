var oldscroll = 0
$(document).ready(function () {
  var count = 1
  var timeout = 50
  $('.header-inner .nav').fadeIn(2000)
  $('.section-hero .section-inner .main-text').fadeIn(2500)
  $('.header-inner .btn-menu').click(function () {
    $('.header-inner .btn-menu').toggleClass('click')
    $('.menu').fadeToggle()
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
      : 3
    var slidesMobile = $this.data('slides-mobile')
      ? $this.data('slides-mobile')
      : 2.5
    var spaceBetween = $this.data('space-between')
      ? $this.data('space-between')
      : 0

    var swiper1 = new Swiper('.swiper1-slider-' + index, {
      direction: 'horizontal',
      loop: loop,
      freeMode: freeMode,
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
        dragSize: dragSize
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
      : 2.5
    var slidesTablet = $this.data('slides-tablet')
      ? $this.data('slides-tablet')
      : 2
    var slidesMobile = $this.data('slides-mobile')
      ? $this.data('slides-mobile')
      : 2
    var spaceBetween = $this.data('space-between')
      ? $this.data('space-between')
      : 50

    var swiper2 = new Swiper('.swiper2-slider-' + index, {
      slidesPerView: 'auto',
      spaceBetween: 50,
      freeMode: true,
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        dragSize: dragSize
      }
    })
  })
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
  var btndisplay = 'block'
  var decotxt0 = parseInt($('.section-hero .copyright span').css('top'))
  var decotxt1 = parseInt($('.section-mission .decoration-text').css('left'))
  var decotxt2 = parseInt($('.section-service .decoration-text').css('right'))
  var movedimg = parseInt(
    $('.section-service .service-list .img-container img').css('top')
  )
  var info = parseInt($('.section-information .decoration-text').css('right'))
  var project = parseInt($('.section-project .decoration-text').css('left'))
  var jointeam = parseInt($('.section-careers .text-en').css('left'))
  console.log('window scroll=' + newscroll)
  if (oldscroll < newscroll && newscroll >= 20) {
    decotxt0 = -20
    $('.section-hero .link-block-sns').fadeOut()
  }
  if (oldscroll > newscroll && newscroll < 20) {
    decotxt0 = 0
    $('.section-hero .link-block-sns').fadeIn()
  }
  if (oldscroll < newscroll && newscroll >= 440 && newscroll <= 1300) {
    decotxt1 += 10
  }
  if (oldscroll > newscroll && newscroll >= 440 && newscroll <= 1300) {
    decotxt1 -= 10
  }
  if (oldscroll < newscroll && newscroll >= 840 && newscroll <= 1670) {
    decotxt2 += 10
  }
  if (oldscroll > newscroll && newscroll >= 1100 && newscroll <= 1670) {
    decotxt2 -= 10
  }
  if (oldscroll < newscroll && newscroll >= 1111 && newscroll <= 2970) {
    movedimg += 15
  }
  if (oldscroll > newscroll && newscroll >= 1111 && newscroll <= 2970) {
    movedimg -= 15
  }

  if (oldscroll < newscroll && newscroll >= 5140 && newscroll <= 5990) {
    info += 10
  }
  if (oldscroll > newscroll && newscroll >= 5140 && newscroll <= 5990) {
    info -= 10
  }
  if (newscroll >= 4300 && newscroll < 5340) {
    $('.section-service,.section-project,.header-inner').addClass('isblack')
    if (newscroll > oldscroll) project += 10
  } else if (newscroll <= 4250 || newscroll >= 5340) {
    $('.section-service,.section-project,.header-inner').removeClass('isblack')
    if (newscroll < oldscroll) project -= 10
  }
  if (oldscroll < newscroll && newscroll >= 6625 && newscroll <= 7535) {
    jointeam += 15
  }
  if (oldscroll > newscroll && newscroll >= 6625 && newscroll <= 7535) {
    jointeam -= 15
  }
  $('.section-hero .copyright span').css('top', decotxt0 + 'px')

  $('.section-mission .decoration-text').css('left', decotxt1 + 'px')
  $('.section-service .decoration-text').css('right', decotxt2 + 'px')
  $('.section-service .service-list .img-container img').css(
    'top',
    movedimg + 'px'
  )
  $('.section-information .decoration-text').css('right', info + 'px')
  $('.section-project .decoration-text').css('left', project + 'px')
  $('.section-careers .text-en').css('left', jointeam + 'px')

  oldscroll = newscroll
})
