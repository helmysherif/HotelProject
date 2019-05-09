$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:1,
          nav:false
      },
      1000:{
          items:4,
          nav:true,
          loop:false
      }
  }
})

$( function() {
    $( "#datepicker" ).datepicker();
  } );
$(".drop").click(function(){
    $(".dropdown-menu").toggle();
    $(".dropdown-sbm").hide();
});
$(".drop1").hover(function(){
    $(".dropdown-sbm").toggle();
});
$(".img-link").hover(function(){
    $(".title").toggle();
});
$(window).load(function() {
    $('.flexslider').flexslider({
      animation: "slide"
    });
  });
  $(document).ready(function(){
    $(".menu-toggle").click(function(){
        $("nav").toggleClass("active")
    })
    $("ul li").click(function(){
        $("this").siblings().removeClass("active");
        $("this").toggleClass("active");
    })
})