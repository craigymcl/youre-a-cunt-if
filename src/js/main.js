$(document).ready(function() {
    $('.hamburgerIcon').click(function() {
        if ($('body').hasClass('open')) {
            $(this).removeClass('open');
            $('body').removeClass('open');

            $(this).text('MENU');
			$('a').on('click', function() {
				console.log("clicked");
				$('body').removeClass('open');
			});

        } else {
            $(this).addClass('open');
            $('body').addClass('open');
            $(this).text('Close');
        }
    });
});




 $('body nav a').click(function(e) {
	if($('.hamburgerIcon').hasClass('open')) {
		$('body').removeClass('open');
		$('.hamburgerIcon').text('MENU');
	}
});



/*
// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.mainNav').outerHeight();



$(window).scroll(function(event) {
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('.mainNav').removeClass('mainNav--navDown').addClass('mainNav--navUp');
    } else {
        if ($(window).scrollTop() == 0) {
            $('.mainNav').removeClass('mainNav--navDown mainNav--navUp');
        }
        // Scroll Up
        else if (st + $(window).height() < $(document).height()) {
            $('.mainNav').removeClass('mainNav--navUp').addClass('mainNav--navDown');
        }
    }

    lastScrollTop = st;
};

*/

var previousScroll = 0;
$(window).scroll(function(event){
   var scroll = $(this).scrollTop();
   if (scroll > previousScroll){
       $('.mainNav').removeClass('mainNav--navDown').addClass('mainNav--navUp');
   } else if(scroll < 150) {
       $('.mainNav').removeClass('mainNav--navDown mainNav--navUp');
       console.log("test");
   } else {
      $('.mainNav').removeClass('mainNav--navDown').addClass('mainNav--navDown');
   }
   previousScroll = scroll;
});


$('#getInTouchForm').validate();


$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});




var signupForm = $('#getInTouchForm');
signupForm.on('submit', function(e) {
    e.preventDefault();
    if ($('#getInTouchForm').valid()) {
        $.ajax({
            url: 'mail.php',
            method: 'POST',
            data: signupForm.serialize(),
            success: function() {
                $('#contactUs').addClass('fullWidth--fullHeight fullWidth--flex');
                $('#contactUs .cpIntro').addClass("cpIntro--textLarge");
                $('#contactUs .cpIntro h2').text("Thank you!");
                $('#contactUs .cpIntro p').html("We'll be in touch very soon. <a href='index.html#contactUs'>Send another message</a>");
                $(signupForm).hide();
            }
        })
	}
});
