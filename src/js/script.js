$(document).ready(function(){
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

      function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        })
      };
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    // Modal

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });
    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text())
            $('.overlay, #order').fadeIn('slow');
        });
        function validateForms(form) {
            $(form).validate({
                rules: {
                    name: "required",
                    phone: "required",
                    email: {
                        required:true,
                        email: true
                    }
                },
                messages: {
                    name: "Пожалуйста, введите свое имя.",
                    phone: "Пожалуйста, введите свой номер",
                    email: {
                      required: "Пожалуйста, введите свой емейл",
                      email: "Неправильно введен адрес почты"
                    }
                  }
            });
        };
        validateForms('#consultation-form');
        validateForms('#consultation form');
        validateForms('#order form');
    });
  });

const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false,
    responsive: {
        1200: {
            fixedWidth: 950,
        },
        991: {
            fixedWidth: 700,
        },
        767: {
            fixedWidth: 580,
        },
        320: {
            fixedWidth: 300,
        },
    }
});
document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});