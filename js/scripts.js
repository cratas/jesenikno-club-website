$(document).ready(function(){
    try {
        $('.customer-logos').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000,
            arrows: false,
            dots: false,
                pauseOnHover: false,
                responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 520,
                settings: {
                    slidesToShow: 2
                }
            }]
        });
    } catch(error) {
        console.log("class not found.")
    }
});


$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});


function scrollDown() {
    $('html, body').animate({
        scrollTop: $(".middle-section-background").offset().top - 70
    }, 1000);
}



function openPage(pageName, elmnt) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-page-tablink");
    }

    document.getElementById(pageName).style.display = "block";

    switch(pageName) {
        case 'Home':
            var element = document.getElementById('defaultOpen');
            element.classList.add("active-page-tablink");
            break;
        case 'News':
            var element = document.getElementById('mensTable');
            element.classList.add("active-page-tablink");
            break;
        case 'Contact':
            var element = document.getElementById('resultTable');
            element.classList.add("active-page-tablink");
            break;
      }

}

function openPageWithSection(page, section) {
    localStorage.setItem('section', section);

    console.log(localStorage.getItem('page'));
    
    window.location.href= "muzi.html";
}



window.addEventListener("load", function () {
    var selector = this.localStorage.getItem('section');

    try {
        this.document.getElementById(selector).click();
    }
    catch {
        console.log("unable");
    }
    
    localStorage.setItem('section', 'defaultOpen');
});