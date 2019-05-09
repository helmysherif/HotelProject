$(".down").click(function () {
    $(".menu1").toggle();
});
$(".down1").click(function () {
    $(".menu2").toggle();
});
$(".menu-toggle").click(function () {
    $("nav").toggleClass("active")
});
$("ul li").click(function () {
    $("this").siblings().removeClass("active");
    $("this").toggleClass("active");
});
$(document).ready(function () {
    $('.mySelector').funnyText({
        speed: 400,
        borderColor: 'black',
        activeColor: 'white',
        color: 'black',
        fontSize: '7em',
        direction: 'both'
    });
});
$(".selector").fitText(1.5, {
    minFontSize: '15px',
    maxFontSize: '35px'
});
$(function () {
    $(".colors li").on('click', function () {
        $(":root").css("--maincolor", $(this).data("color"));
        $(":root").css("--maincolor2", $(this).data("color"));
        $(":root").css("--maincolor4", $(this).data("color"));
    });
});
$(".nav1").click(function () {
    $(".p1").fadeIn(1000);
    $(".p2").hide();
    $(".p3").hide();
});
$(".nav2").click(function () {
    $(".p1").hide();
    $(".p2").fadeIn(1000);
    $(".p3").hide();
});
$(".nav3").click(function () {
    $(".p1").hide();
    $(".p3").fadeIn(1000);
    $(".p2").hide();
});
$(".drop5").click(function () {
    $(".drop6").slideToggle();
    $(".drop8").hide();
    $(".drop10").hide();
    $(".drop12").hide();
});
$(".drop7").click(function () {
    $(".drop8").slideToggle();
    $(".drop6").hide();
    $(".drop10").hide();
    $(".drop12").hide();
});
$(".drop9").click(function () {
    $(".drop10").slideToggle();
    $(".drop8").hide();
    $(".drop6").hide();
    $(".drop12").hide();
});
$(".drop11").click(function () {
    $(".drop12").slideToggle();
    $(".drop8").hide();
    $(".drop10").hide();
    $(".drop6").hide();
});
$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: true,
            loop: false
        }
    }
});
new WOW().init();
/*$("body").niceScroll({
  cursorcolor:"#0f0",
  cursorwidth:"10px",
  background:"rgba(20,20,20,0.3)",
});*/
$("ul .sub-menu").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
});
function changeColor(){
    document.body.style.background = document.getElementById(id).innerHTML
}
$(".button1").click(function () {
    $(".menu3").slideToggle();
});