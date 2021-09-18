
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

$(window).scroll(function () {
    if ($(document).scrollTop() > 1000) {
        // console.log("OK");
    }
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
        tablinks[i].style = "border-bottom: 4px solid #ebebeb";
    }
    document.getElementById(pageName).style.display = "block";

    elmnt.style = "border-bottom: 4px solid rgb(13,12,181)";

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