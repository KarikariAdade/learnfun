$(document).ready(function () {
    ScrollEvent();
    carousel();
    //    var ssk3 = $("#ssk3");
    //    $("#ssk").hover(function () {
    //            $(this).attr("src", "img/slider/header-slide2.jpg")
    //        },
    //        function () {
    //            $(this).attr("src", "img/slider/slider_group_in_campus.jpg");
    //        }
    //    )
    //    $("#ssk").click().each(function () {
    //        $(this).click(function () {
    //            alert("fjfk");
    //        })
    //    })
});
 var swiper = new Swiper('.swiper-container', {
         slidesPerView: 5,
      spaceBetween: 5,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
       breakpoints:{
        1024:{
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        }
    }
    });

function ScrollEvent() {
    $(window).on('scroll', function () {
        if ($(window).scrollTop()) {
            $('nav').addClass('scrollEffect');
            // $('#shit').attr("src", "<?php {{asset('images/bluelogo.png')}}?>");
        } else {
            $('nav').removeClass('scrollEffect');
            // $('#shit').attr("src", "<?php {{ asset('images/properlogo.png') }} ?>");
        }
    });
};

$(window).on('scroll', function (){
    if ($(window).scrollTop() > 600 && $(window).scrollTop() < 1900) {
        $('.course_detail_sidebar').addClass('active');
    }else{
        $('.course_detail_sidebar').removeClass('active');
    }
})

function carousel() {
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        callbacks: true,
        URLhashListener: true,
        autoplayHoverPause: true,
        startPosition: 'URLHash',
        smartSpeed: 1000,
        autoplay: true,
        lazyLoad: true,
        autoplayTimeout: 10000,
    });
}

var accordion = $('.accordion');
var accordionSpan = $('.accordionSpan');

// $('.accordionSpan').click(function () {
//     accordionSpan.css("display", "none");
// });
//FREE_STUFF PAGE ACCORDION
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
/* SMOOTH SCROLL */
(function (document, $) {

    var $scrollElement = (function () {
        // Find out what to scroll (html or body)
        var $html = $(document.documentElement),
            $body = $(document.body),
            bodyScrollTop;
        if ($html.scrollTop()) {
            return $html;
        } else {
            bodyScrollTop = $body.scrollTop();
            // If scrolling the body doesn’t do anything
            if ($body.scrollTop(bodyScrollTop + 1).scrollTop() == bodyScrollTop) {
                return $html;
            } else {
                // We actually scrolled, so undo it
                return $body.scrollTop(bodyScrollTop);
            }
        }
    }());

    $.fn.smoothScroll = function (speed) {
        speed = ~~speed || 400;
        // Look for links to anchors (on any page)
        return this.find('a[href*="#"]').click(function (event) {
            var hash = this.hash,
                $hash = $(hash); // The in-document element the link points to
            // If it’s a link to an anchor in the same document
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                // If the anchor actually exists…
                if ($hash.length) {
                    // …don’t jump to the link right away…
                    event.preventDefault();
                    // …and smoothly scroll to it
                    $scrollElement.stop().animate({
                        'scrollTop': $hash.offset().top
                    }, speed, function () {
                        location.hash = hash;
                    });
                }
            }
        }).end();
    };

}(document, jQuery));

$('html').smoothScroll();
$('html').smoothScroll(1200);

    function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

 // $(window).scroll(function (){
 //            if ($(this).scrollTop() > 200) {
 //                $('.course_detail_sidebar').css("display", "fixed");
 //            }else{
 //                $('.course_detail_sidebar').css("display", "block");
 //            }
 //        });