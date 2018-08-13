$('#expandSearch').on('click', function(e){
    e.preventDefault();
    $("#searchBar").toggle('slide',{
        direction : 'right'
    },200);
});

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            responsiveClass:true,
            navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
            responsive:{
                0:{
                    items:1,
                    nav:true,
                    loop:true,
                    dots:true,
                    lazyLoad:true,
                },
                600:{
                    items:1,
                    nav:true,
                    loop:true,
                    dots:true,
                    lazyLoad:true,
                },
                1000:{
                    items:1,
                    nav:true,
                    loop:true,
                    dots:true,
                    lazyLoad:true,
                }
            },
            nav:false,
            dots:true,
            lazyLoad:true,
        });

        // Wrap every letter in a span
        $('.ml2').each(function(){
        $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
        });

        anime.timeline({loop: false})
        .add({
            targets: '.ml2 .letter',
            scale: [4,1],
            opacity: [0,1],
            translateZ: 0,
            easing: "easeOutExpo",
            duration: 950,
            delay: function(el, i) {
            return 70*i;
            }
        });
});

$(function() {
    var header = $(".navbar-custom"); 
  
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            header.addClass("scrolled");
        } else {
            header.removeClass("scrolled");
        }
    });
  
});