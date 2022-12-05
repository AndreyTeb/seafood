$(function(){
  $('.header__slider').slick({
    dots: true,
    vertical: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icon/prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icon/next.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 376,
        settings: {
          arrows: false,
          dots: false,
          autoplay: true,
          autoplaySpeed: 3000,
        }
      },
    ]
  });

  $('.header__content-link').on('click', function(e){
    e.preventDefault();
    $('.header__content-link').removeClass('header__content-link--active');
    $(this).addClass('header__content-link--active');
  })

  $('.product__name').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: '.product__content',
    vertical: true,
    prevArrow: '<button type="button" class="product__prev"><img src="images/icon/product-prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="product__next"><img src="images/icon/product-next.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 891,
        settings: {
          arrows: false,
          vertical: false,
          slidesToShow: 3,
          dots: true
        }
      },
      {
        breakpoint: 471,
        settings: {
          arrows: false,
          vertical: false,
          slidesToShow: 1,
          dots: true
        }
      },
    ]
  });
  $('.product__content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.product__name',
    vertical: true,
    arrows: false 
  });

  $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
    $('.menu__btn').toggleClass('menu__btn--active');
  });
  $('.menu__link, .logo').on('click', function(){
    $('.menu__list').removeClass('menu__list--active');
    $('.menu__btn').removeClass('menu__btn--active');
  });
});

