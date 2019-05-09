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
            items: 5,
            nav: true,
            loop: false
        }
    }
});
$(".nav1").click(function(){
    $(".p1").fadeIn(1000);
    $(".p2").hide();
    $(".p3").hide();
    $(".p4").hide();
    $(".p5").hide();
  });
  $(".nav2").click(function(){
    $(".p1").hide();
    $(".p2").fadeIn(1000);
    $(".p3").hide();
    $(".p4").hide();
    $(".p5").hide();
  });
  $(".nav3").click(function(){
    $(".p1").hide();
    $(".p3").fadeIn(1000);
    $(".p2").hide();
    $(".p4").hide();
    $(".p5").hide();
  });
  $(".nav4").click(function(){
    $(".p1").hide();
    $(".p4").fadeIn(1000);
    $(".p2").hide();
    $(".p3").hide();
    $(".p5").hide();
  });
  $(".nav5").click(function(){
    $(".p1").hide();
    $(".p5").fadeIn(1000);
    $(".p2").hide();
    $(".p4").hide();
    $(".p3").hide();
  });
  
// start popup
$(".show-popup").click(function(){
    $($(this).data("popup")).fadeIn();
})
$(".popup").click(function(){
    $(this).fadeOut()
})
$(".popup .inner").click(function(ev){
    ev.stopPropagation();
})
$(".popup .close").click(function(eve){
    eve.preventDefault();
    $(this).parentsUntil(".popup").parent().fadeOut()
})
$(document).keydown(function(e){
    if(e.keyCode == 27)
    {
        $(".popup").fadeOut();
    }
})
// end popup