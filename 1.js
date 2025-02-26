var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

}

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbxfew3KTDomk2m-c7n_WGAdHmCZ8KBZ4Caf_l9ylBSAo2O39EUDr2nMbyY_0xYTgA_xjw/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully!"
            setTimeout(function(){
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})

$(document).ready(function() {
    var slideshows = $('.slideshow-container');
    var slideCount = 4;
    var currentSlide = 0;
    var slideInterval;

    function startSlideShow() {
        showSlide(currentSlide);
        slideInterval = setInterval(nextSlide, 4000);
    }

    function nextSlide() {
        slideshows.each(function() {
            var slides = $(this).find('.slide');
            slides.eq(currentSlide).animate({ left: '-100%' }, 1000, 'easeInOutExpo', function() {
                $(this).hide().css('left', '100%');
            });
        });

        currentSlide = (currentSlide + 1) % slideCount;

        slideshows.each(function() {
            var slides = $(this).find('.slide');
            slides.eq(currentSlide).css('left', '100%').show().animate({ left: '0' }, 1000, 'easeInOutExpo');
        });

        showSlide(currentSlide);
    }

    function showSlide(slideIndex) {
        slideshows.each(function() {
            var slides = $(this).find('.slide');
            slides.eq(slideIndex).css({ left: '100%', display: 'block' }).animate({ left: '0' }, 1000, 'easeInOutExpo');
        });
    }

    startSlideShow();
});


