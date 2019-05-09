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
    $(this).siblings().removeClass("active");
    $(this).toggleClass("active");
});
$(".selector").fitText(1.5, {
    minFontSize: '15px',
    maxFontSize: '35px'
});
$(".menu3").click(function () {
    $(".drop2").slideToggle(); 
});
$(".menu4").click(function () {
    $(".drop3").slideToggle();
});
$(".menu5").click(function () {
    $(".drop4").slideToggle();
});
$(".menu6").click(function () {
    $(".drop5").slideToggle();
});
$(".menu7").click(function () {
    $(".drop6").slideToggle();
});
$(".menu8").click(function () {
    $(".drop7").slideToggle();
});
$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
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
// start Grid/List views for products
$(".view-options i").on("click",function(){
    $(this).addClass("active").siblings().removeClass("active");
    $(".items").removeClass("list-view grid-view").addClass($(this).data("class"));
})
// end Grid/List views for products
// start Add Asterisk to all the required field
$("<span class = 'Asterisk'><i class='fas fa-sort-down'></i></span>").insertBefore(".menu4");
$(".Asterisk").parent("div").css({'position':'relative'});
$(".Asterisk").each(function(){
    $(this).css({
        'position':'absolute',
        'top':'5px',
        'left': $(this).parent("div").find(":input").innerWidth() - 20,
        'color':'#ccc',
        'font-weight':'bold'
    });
});

// end Add Asterisk to all the required field
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