$(document).ready(function () {
    $(".slider").slick({
        dots: true,
        infinite: true,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '60px',
        responsive: 
        [{
            breakpoint: 480,
            settings:
            {
                arrows: false,
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }]
    });
});
