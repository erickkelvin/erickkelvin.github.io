$(document).ready(function() {
    var currPage = window.location.href.split("#");
    if ((currPage.length > 1)&&(currPage[1]!="")) {
        var currID = "#" + currPage[1];
        if ($(currID).length) {
            showContent($("a[href='" + currID + "']"),$(currID));
        }
    }

    window.onpopstate = function() {
        var currMenuTitle = window.location.hash.charAt(1).toUpperCase() + window.location.hash.slice(2);
        var currMenuItem = $(".menu-item:contains('"+currMenuTitle+"')");
        var currItemContent = $(window.location.hash);

        if ((currItemContent.is(":visible"))||(window.location.hash=="")) {
            currMenuItem.removeClass("curr-item");
            $(".content").slideUp();
            $("html, body").animate({ scrollTop: "0" });
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
            showContent(currMenuItem,currItemContent);
        }
    };

});

function showContent(menuItem, item) {
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
    $('html, body').animate({
        scrollTop: item.offset().top - 100
    });
    $("#header").css("height","90px");
    $("hr").css("margin", "30px auto");
}