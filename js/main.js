

  $(window).scroll(function () {
    if(this.scrollY>20){
      $(".nav").addClass("header_fixed");
      $(".smart").addClass("active");
      }
    else{
      $(".nav").removeClass("header_fixed");
      $(".smart").removeClass("active");
    }
  });
// //scrool keo thao header
// $(document).scroll(function () {
//   const currentLength = $(document).scrollTop();
//   if (currentLength > 100) {
//     console.log("a");
//     $(".nav").addClass("header_fixed");
//   } else {
//     $(".nav").removeClass("header_fixed");
//     console.log("b");
//   }
// });

//click bars
$(".nav_bars i").click(function (e) {
  e.preventDefault();
  console.log("click");
  $(".nav_ul").addClass("active");
});

$(".close").click(function (e) {
  e.preventDefault();
  $(".nav_ul").removeClass("active");
});

var typed = new Typed(".type", {
  strings: ["Youtube", "Blogger", "Developer"],
  typeSpeed: 100,
  backSpeed: 0,
  fadeOut: true,
  loop: true,
});

var typed = new Typed(".typing", {
  strings: ["Youtube", "Blogger", "Developer"],
  typeSpeed: 100,
  backSpeed: 0,
  fadeOut: true,
  loop: true,
});
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  autoplay: true,
    autoplayTimeout: 10000,
    navText: [
      '<i class="las la-angle-left"></i>',
      '<i class="las la-angle-right"></i>',
    ],
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:3
      }
  }
})


$(".smart").click(function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "slow");
});