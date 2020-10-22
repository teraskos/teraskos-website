/* Template Name: Landrick - Saas & Software Landing Page Template
   Author: Shreethemes
   E-mail: shreethemes@gmail.com
   Created: August 2019
   Version: 2.5
   Updated: July 2020
   File Description: Main JS file of the template
*/

/****************************/
/*         INDEX            */
/*===========================
 *     01.  Loader          *
 *     02.  Menu            *
 *     03.  Sticky Menu     *
 *     03.  Back to top     *
 ===========================*/

// Loader 
window.$(window).on('load', function() {
    window.$('#status').fadeOut();
    window.$('#preloader').delay(350).fadeOut('slow');
    window.$('body').delay(350).css({
        'overflow': 'visible'
    });
}); 

// Menu
window.$('.navbar-toggle').on('click', function (event) {
    window.$(this).toggleClass('open');
    window.$('#navigation').slideToggle(400);
});

window.$('.navigation-menu>li').slice(-1).addClass('last-elements');

window.$('.menu-arrow,.submenu-arrow').on('click', function (e) {
    if (window.$(window).width() < 992) {
        e.preventDefault();
        window.$(this).parent('li').toggleClass('open').find('.submenu:first').toggleClass('open');
    }
});

window.$(".navigation-menu a").each(function () {
    if (this.href == window.location.href) {
        window.$(this).parent().addClass("active"); 
        window.$(this).parent().parent().parent().addClass("active"); 
        window.$(this).parent().parent().parent().parent().parent().addClass("active"); 
    }
});

// Clickable Menu
window.$(".has-submenu a").click(function() {
    if(window.innerWidth < 992){
        if(window.$(this).parent().hasClass('open')){
            window.$(this).siblings('.submenu').removeClass('open');
            window.$(this).parent().removeClass('open');
        } else {
            window.$(this).siblings('.submenu').addClass('open');
            window.$(this).parent().addClass('open');
        }
    }
});

window.$('.mouse-down').on('click', function(event) {
    var $anchor = window.$(this);
    window.$('html, body').stop().animate({
        scrollTop: window.$(window.$anchor.attr('href')).offset().top - 72
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});

//Sticky
window.$(window).scroll(function() {
    var scroll = window.$(window).scrollTop();

    if (scroll >= 50) {
        window.$(".sticky").addClass("nav-sticky");
    } else {
        window.$(".sticky").removeClass("nav-sticky");
    }
});

// Back to top
window.$(window).scroll(function(){
    if (window.$(this).scrollTop() > 100) {
        window.$('.back-to-top').fadeIn();
    } else {
        window.$('.back-to-top').fadeOut();
    }
}); 
window.$('.back-to-top').click(function(){
    window.$("html, body").animate({ scrollTop: 0 }, 3000);
    return false;
}); 

//Tooltip
window.$(function () {
    window.$('[data-toggle="tooltip"]').tooltip()
});
//Popover
window.$(function () {
    window.$('[data-toggle="popover"]').popover()
});
//Feather icon
window.feather.replace()