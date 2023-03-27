$(document).ready(function () {
    rollingBanner();
    scroll();
    countryList();
    searchBox();
    modal();
    menuList();
    visualSlider();
    categoryHover();
    topBtn();
}) //$(document).ready(function(){-------------------------------------------------------

function rollingBanner() {
    var Height = $('.banner').height();
    var Num = $('.rolling li').length;
    var Max = Height * Num;
    var Move = 0;

    function Rolling() {
        Move += Height;
        $('.rolling').animate({ 'top': -Move }, 500, function () {
            if (Move >= Max) {
                $(this).css('top', 0);
                Move = 0;
            };
        });
    };
    setInterval(Rolling, 5000);
    $('.rolling').append($('.rolling li').first().clone());
}
// // --------------------------------------------------------------------------------------
function scroll() {
    $(document).on('scroll', function () {
        var scrollTop = $(window).scrollTop()
        var topBtn = $('.scroll-top')
        if (scrollTop > 1) {
            $('.banner').slideUp()
            $('.h-wrapper').addClass('on')
            $('.menu-list').children().addClass('on')
            $('.slide').slideUp()
        } else {
            $('.banner').stop().slideDown()
            $('.menu-list').children().removeClass('on')
            $('.h-wrapper').removeClass('on')
            $('.slide').stop().slideDown()
        }
        if(scrollTop >= 850){
            topBtn.fadeIn()
        }else{
            topBtn.fadeOut()
        }
    })
}
function topBtn(){
    
    var toptop = $('.scroll-top')

    toptop.on('click', top)
    function top(){
        $('body,html').animate({'scrollTop': 0},300)
    }
}
// --------------------------------------------------------------------------------------
function countryList() {
    var country = $('.country');
    var cList = $('.country-list');

    country.children('a').on('click', onClick)
    country.on('mouseleave', leave)

    function onClick() {
        if (cList.is(':visible')) {
            cList.slideUp()
        } else {
            cList.slideDown()
        }
    }
    function leave() {
        cList.slideUp()
    }
}
// --------------------------------------------------------------------------------------
function searchBox() {
    var box = $('.search-box')
    var searchBtn = $('.search-icon')
    var xBtn = $('.x-btn')
    var main = $('.m-container')

    searchBtn.on('click', onBox)
    main.on('click', close)
    xBtn.on('click', x)
    function onBox() {
        if (box.is(':visible')) {
            box.slideUp(300)
        } else {
            box.slideDown(300)
            $('.textBox').val("")
        }
    }
    function x() {
        $('.textBox').val("")
    }
    function close(){
        box.slideUp(300)
        $('.textBox').val("")
    }
}
// --------------------------------------------------------------------------------------
function modal() {
    var modal = $('.modal')
    var favModal = $('.fav.modal')
    var accModal = $('.acc.modal')
    var bagModal = $('.bag.modal')
    var fav = $('.favorite-icon')
    var acc = $('.account-icon')
    var bag = $('.bag-icon')

    fav.on('click', fModal)
    acc.on('click', aModal)
    bag.on('click', bModal)
    $('.m-container').on('click', out)
    modal.find($('.x-btn')).on('click', out)

    function fModal() {
        modal.removeClass('show')
        favModal.addClass('show');
    }
    function aModal() {
        modal.removeClass('show')
        accModal.addClass('show');
    }
    function bModal() {
        modal.removeClass('show')
        bagModal.addClass('show');
    }
    function out() {
        modal.removeClass('show')
        modal.find($('.text-box')).val("")
    }
}
// --------------------------------------------------------------------------------------
function menuList() {
    var menu = $('.menu');
    var content = $('.menu-wrap')
    menu.children('a').on('mouseenter', onMouse)
    $('.menu-wrapper').on('mouseleave', leaveMouse)
    content.hide()

    function onMouse() {
        menu.children('a').removeClass('selected')
        $(this).addClass('selected')
        content.fadeOut()
        $(this).next().stop().fadeIn()
    }
    function leaveMouse() {
        content.stop().fadeOut()
        menu.children('a').removeClass('selected')
    }
}
// --------------------------------------------------------------------------------------
function visualSlider() {
    $('.visual-slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        pauseOnFocus: true,
    })
}
// --------------------------------------------------------------------------------------
function categoryHover() {
    var btnBox = $('.more-btn');
    var hover = $('.category-list .item a')
    hover.on('mouseenter', onBox);
    hover.on('mouseleave', offBox)
    btnBox.hide()
    function onBox() {
        $(this).find(btnBox).show()
        $(this).find($('img')).addClass('on')
    }
    function offBox() {
        $(this).find(btnBox).hide()
        $(this).find($('img')).removeClass('on')
    }
}