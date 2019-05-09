$(".navbar li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
});
$(function() {
    $('.chart').easyPieChart({
        size:180,
        barColor:'#17D3E6',
        scaleColor:false,
        trackColor:false,
        lineWidth:8,
        trackColor:'#373737',
        lineCap:'circle',
        animate:2000,
    });
});