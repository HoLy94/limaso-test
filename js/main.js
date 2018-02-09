// Sticky navbar
var win = $(window),
    header = $('.navbar'),
    banner = $('.banner'),
    pos = header.offset().top,
    sticky = function() {
        win.scrollTop() > pos ? header.addClass('sticky') && banner.addClass('banner-margin') : header.removeClass('sticky') && banner.removeClass('banner-margin')
    }

win.scroll(sticky)
    // Активний пункт меню
$('.navbar-nav-item').click(function() {
    $('.navbar-nav-item').removeClass('navbar-nav-item__active');
    $(this).addClass('navbar-nav-item__active');
});
// мобільне меню
$('.burger').click(function() {
    $(this).toggleClass('open');
    $('body').toggleClass('block-skroll');
    $('.navbar').toggleClass('mobile-active');
});

// Сортування
$('.sort').click(function() {
    $('.sort-list').toggleClass('sort-list__open');
})

function sortMeBy(arg, sel, elem, order) {
    var $selector = $(sel),
        $element = $selector.children(elem);

    $element.sort(function(a, b) {
        var an = parseInt(a.getAttribute(arg)),
            bn = parseInt(b.getAttribute(arg));

        if (order == 'asc') {
            if (an > bn)
                return 1;
            if (an < bn)
                return -1;
        } else if (order == 'desc') {
            if (an < bn)
                return 1;
            if (an > bn)
                return -1;
        }
        return 0;
    });

    $element.detach().appendTo($selector);
}

$(document).on('click', '.sort-list-price-desc', function() {
    sortMeBy('data-price', '.products', '.products-item', 'desc');
});
$(document).on('click', '.sort-list-price-asc', function() {
    sortMeBy('data-price', '.products', '.products-item', 'asc');
});

// Модальне вікно
$('.products-item-btn').click(function() {
    $('body').addClass('block-skroll');
    $('.modal-bg').addClass('modal-bg__open');
    $('.modal').addClass('modal__open');
});
$('.modal-header-btn').click(function() {
    $('body').removeClass('block-skroll');
    $('.modal-bg').removeClass('modal-bg__open');
    $('.modal').removeClass('modal__open');
});

// price slider
$(".price-slider-range").slider({
    range: true,
    min: 0,
    max: 800,
    values: [70, 400],
    animate: true,
    step: 5,
    slide: function(event, ui) {
        $("#amount-min").val(ui.values[0]);
        $("#amount-max").val(ui.values[1]);
    }
});

$("#amount-min").val($(".price-slider-range").slider("values", 0));
$("#amount-max").val($(".price-slider-range").slider("values", 1));