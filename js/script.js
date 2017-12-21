$(document).ready(function() {

    loadPage();

    window.onpopstate = function () { switchPage(); };

    $(".menu-item").click(function(e) {
        if ($(this).attr("href") == window.location.hash) {
            e.preventDefault();
            switchPage();
        }
    });

});

function loadPage() {
    var currPage = window.location.href.split("#");
    if ((currPage.length > 1)&&(currPage[1]!="")) {
        var currID = "#" + currPage[1];
        if ($(currID).length) {
            showTab($("a[href='" + currID + "']"),$(currID));
        }
    }
}

function switchPage() {
    var currMenuTitle = window.location.hash.charAt(1).toUpperCase() + window.location.hash.slice(2);
    var currMenuItem = $(".menu-item:contains('"+currMenuTitle+"')");
    var currItemContent = $(window.location.hash);
    console.log(window.location.hash);
    if ((currItemContent.is(":visible"))||(window.location.hash=="")) {
        currMenuItem.removeClass("curr-item");
        $(document).scrollTop(0);
        $(".content").slideUp(function() {
            $("html, body").animate({ scrollTop: "0" });
        });
        $("#header").css("height","130px");
        if($(window).width() > 767) { $("hr").css("margin", "60px auto"); }
        else { $("hr").css("margin", "35px auto"); }
        document.title = "Erick Santos";
        if (currItemContent.is(":visible")) {
            history.pushState("", "Erick Santos", window.location.pathname);
        }
    }
    else {
        $(".menu-item").removeClass("curr-item");
        showTab(currMenuItem,currItemContent);
    }
}

function showTab(menuItem, item) {
    menuItem.addClass("curr-item");
    if ($(".content").is(":visible")) {
        $(".content").slideUp(function(){
            item.slideDown();
        });
    }
    else {
        item.slideDown();
    }
    document.title = menuItem.text() + " | Erick Santos";

    $("#header").css("height","90px");
    $("hr").css("margin", "25px auto");
}