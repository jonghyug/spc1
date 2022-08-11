$(".sub").hide();
$(".now").hide();
$(".samon1").hide();
$(".subTwo").hide();
let num = 0;
let liLength = $("#sliderWrap li").length;
let pos1 = -(liLength-1) * 100
let pos2 = -(liLength-2) * 100
let state = 1
let btnPos;

function nextSlider() {
  state = 0;
  num++;
  if ( num == liLength ) {
    num = 0;
    $("#sliderWrap").append($(".heaImg1"))
                    .css({ marginLeft: pos2 + "%" })
                    .animate({ marginLeft: pos1 + "%" },function() {
                      for (n=2; n<liLength+1; n++) {
                        $("#sliderWrap").append($(".heaImg"+n))
                      }
                      $("#sliderWrap").css({ marginLeft: 0 })
                      state = 1;
                    })
  } else {
    $("#sliderWrap").animate({ marginLeft: "-=100%" },function(){
      state = 1;
    })
  }
  $(".headerTag a").removeClass('on')
  $(".headerTag a:eq("+ num +")").addClass('on')
}
function autoSlider() {
  nextSlider()
}
let timer = setInterval(autoSlider, 3000)


$(".headerTag a").on("click", function(){
  $(".headerTag a").removeClass("on")
  $(this).addClass("on");
  num = $(this).index()
  btnpos = num * (-100) + "%"
  $("#sliderWrap").animate({ marginLeft: btnpos })
  clearInterval(timer);
  timer = setInterval(autoSlider, 3000)

})



$(".list1Two a").on("click", function(){
  $(".subTwo").hide();
  $(".subTwo1").show();
})
$(".list2Two a").on("click", function(){
  $(".subTwo").hide();
  $(".subTwo2").show();
})
$(".list3Two a").on("click", function(){
  $(".subTwo").hide();
  $(".subTwo3").show();
})
$(".list4Two a").on("click", function(){
  $(".subTwo").hide();
  $(".subTwo4").show();
})
$(".list5Two a").on("click", function(){
  $(".subTwo").hide();
  $(".subTwo5").show();
})


let stav = 1;
$(".gnbBtn").on("click", function(){
  if ( stav == 1 ) {
  $("#headerTwo").animate({ width:50+"%",right:-1 })
  stav = 0;
} else if ( stav == 0 ) {
  $("#headerTwo").animate({ right: -51+"%"})
  stav = 1;
  }
})


$(".list").on("mouseenter",function(){
  $(this).children("ul").show();
})
$(".list").on("mouseleave", function(){
  $(".sub").hide();
})
$(window).on("scroll",function(){
  if ( $(window).scrollTop() > 780 ) {
  $("#header").addClass("hd")
  $("#header").removeClass("hp")
  $(".list a").css({color:"#000"})
  $("#header h1").addClass("hh")
  $("#header h1").removeClass("ha")
  $(".sub").css({background:"#fff"}).addClass("ht")
  } else if ( $(window).scrollTop() < 780 ) {
  $("#header").removeClass("hd")
  $("#header").addClass("hp")
  $(".list a").css({color:"#fff"})
  $("#header h1").removeClass("hh")
  $("#header h1").addClass("ha")
  $(".sub").css({background:"#39f"}).removeClass("ht")
  }
})

$(".YoutubeImg li a").on("mouseenter", function(){
  $(this).children("div").stop().animate({ top: 170 })
})
$(".YoutubeImg li a").on("mouseleave", function(){
  $(this).children("div").stop().animate({ top: 320 })
})

$(".careerFor dl").on("mouseenter", function(){
  $(".now").hide();
  $(this).children("dt").stop().animate({marginTop: -40 }).css({textIndent: -9999,overflow:"hidden"})
  $(this).children(".now").animate({ marginTop: 10 }).show();
})
$(".careerFor dl").on("mouseleave", function(){
  $(".now").hide();
  $(this).children("dt").stop().animate({marginTop: 0}).css({textIndent:0, overflow:"visible"})
  $(this).children(".now").hide();
})



$(".gallery li a").on("mouseenter", function(){
  $(this).children("div").stop().animate({ top: 260})
})
$(".gallery li a").on("mouseleave", function(){
  $(this).children("div").stop().animate({ top: 410 })
})
$(".consti li").on("mouseenter", function(){
  $(this).children(".con").css({ display: "block" })
  $(this).children(".const").css({ display: "none" })
})
$(".consti li").on("mouseleave", function(){
  $(".con").css({ display: "none" })
  $(this).children(".const").css({ display: "block" })
})

$(".samTi31 li").on("mouseenter", function(){
  $(this).children("p").stop().animate({ height:0 },300).css({ textIndent:-9999 })
  $(this).children(".samon1").show()
})
$(".samTi31 li").on("mouseleave", function(){
  $(this).children("p").stop().animate({ height: 150 },300).css({ textIndent: 0 })
  $(this).children("ul").hide()
})
