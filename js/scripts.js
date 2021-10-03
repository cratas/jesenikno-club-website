
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
        tablinks[i].style = "background: linear-gradient(rgb(13,12,181) 0 0) 0 100% /var(--d, 0) 4px no-repeat; transition:0.25s; --d: 0%;";
    }

    document.getElementById(pageName).style.display = "block";
    elmnt.style = "background: linear-gradient(rgb(13,12,181) 0 0) 0 100% /var(--d, 0) 4px no-repeat; transition:0.25s; --d: 100%;";

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].removeEventListener("mouseleave", (event) => { event.target.style = "--d: 100%;" });
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