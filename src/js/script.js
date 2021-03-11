// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 1200,
//         // adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevron_left.png"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icons/chevron_right.png"></button>',
//         responsive: [
//             {
//                 breakpoint: 992,
//                 settings: {
//                   dots: true,
//                   arrows: false,
//                 }
//             }
//         ]
//     });
//   });

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