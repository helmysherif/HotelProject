$(".menu-toggle").click(function () {
    $("nav").toggleClass("active")
});
$(".drop5").click(function () {
    $(".drop6").slideToggle();
    $(".drop8").hide();
    $(".drop10").hide();
    $(".drop12").hide();
    $(".drop16").hide();
    $(".drop18").hide();
});
$(".drop7").click(function () {
    $(".drop8").slideToggle();
    $(".drop6").hide();
    $(".drop10").hide();
    $(".drop12").hide();
    $(".drop14").hide();
    $(".drop16").hide();
    $(".drop18").hide();
});
$(".drop9").click(function () {
    $(".drop10").slideToggle();
    $(".drop8").hide();
    $(".drop6").hide();
    $(".drop12").hide();
    $(".drop14").hide();
    $(".drop16").hide();
    $(".drop18").hide();
});
$(".drop11").click(function () {
    $(".drop12").slideToggle();
    $(".drop8").hide();
    $(".drop10").hide();
    $(".drop6").hide();
    $(".drop14").hide();
    $(".drop18").hide();
});
$(".drop13").click(function () {
    $(".drop14").slideToggle();
    $(".drop8").hide();
    $(".drop10").hide();
    $(".drop6").hide();
    $(".drop12").hide();
    $(".drop16").hide();
    $(".drop18").hide();
});
$(".drop15").click(function () {
    $(".drop16").slideToggle();
    $(".drop8").hide();
    $(".drop10").hide();
    $(".drop6").hide();
    $(".drop12").hide();
    $(".drop14").hide();
    $(".drop18").hide();
});
$(".drop17").click(function () {
    $(".drop18").slideToggle();
    $(".drop8").hide();
    $(".drop10").hide();
    $(".drop6").hide();
    $(".drop12").hide();
    $(".drop14").hide();
    $(".drop16").hide();
});
$(".fa-plus").click(function () {
    $(".box").css("height","300px");
    $(".lists").css("display","block");
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