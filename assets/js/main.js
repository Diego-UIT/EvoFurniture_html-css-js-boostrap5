// =============================================
// MENU - NAVBAR
// =============================================
const openMegaMenu = $('.open-mega-content')
const menuMega = $('.mega-content')

openMegaMenu.hover(() => {
    menuMega.toggle()
})

// =============================================
// BLOGS - OWL CAROUSEL
// =============================================
const owlBlogs =  $(".owl-carousel.owl-blogs")

owlBlogs.owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        300:{
            items:2,
            nav:true
        },
        600:{
            items:3,
            nav:true
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
})

// =============================================
// BRANDS - OWL CAROUSEL
// =============================================
const owlBrand =  $(".owl-carousel.owl-brands")

owlBrand.owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
        },
        600:{
            items:3,
            nav:true,
        },
        1000:{
            items:6,
            nav:true,
            loop:false
        }
    }
})

// =============================================
// BUTTON - BACK-TO-TOP
// =============================================
const btnBackTop = $(".back-to-top")

jQuery(document).ready(function($){ 
    if( btnBackTop.length > 0 ) {
        $(window).scroll(() => {
            var e = $(window).scrollTop();
            if (e > 200) {
                btnBackTop.addClass('show')
            } else {
                btnBackTop.removeClass('show')
            }
        })

        btnBackTop.click(function () {
            $('body,html').animate({
                scrollTop: 0
            })
        })
    }
})

// =============================================
// SEARCH - AUTOCOMPLETE - INPUT
// =============================================
const searchAuto =  $( "#tags" )
console.log(searchAuto)

$( function() {
    var availableTags = [
      "Bàn",
      "Bộ bàn ăn",
      "Giường",
      "Ghế",
      "Tủ",
      "Sofa",
      "Ghế phòng khách",
      "Nệm",
      "Đồng hồ",
      "Khung & Tranh ảnh",
      "Tinh dầu & Túi thơm",
      "Nến",
      "Đồ dùng văn phòng",
    ];
    searchAuto.autocomplete({
      source: availableTags
    });
  } );

  
// =============================================
// M-MENU
// =============================================
// document.addEventListener(
//     "DOMContentLoaded", () => {
//         new Mmenu( "#my-menu", {
//            "slidingSubmenus": true,
//            "navbars": [
//               {
//                  "position": "top",
//                  "content": [
//                     "searchfield"
//                  ]
//               }
//            ]
//         });
//     }
// );
