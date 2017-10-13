$(document).ready(function() {
    var currPage = window.location.href.split("#");
    if ((currPage.length > 1)&&(currPage[1]!="")) {
        var currID = "#" + currPage[1];
        if ($(currID).length) {
            showContent($("a[href='" + currID + "']"),$(currID));
        }
    }

    $(".menu-item").click(function(e) {
        e.preventDefault();
        var item = $($(this).attr("href"));
        if (item.is(":visible")) {
            $(this).removeClass("curr-item");
            item.slideUp();
            $("html, body").animate({ scrollTop: "0" });
            $("#header").css("height","150px");
            $("hr").css("margin", "60px auto");
            document.title = "Erick Santos";
            history.pushState("", "", window.location.pathname);
        }
        else {
            window.location.href = $(this).attr("href");
            $(".menu-item").removeClass("curr-item");
            showContent($(this),item);
        }
    });

});

function showContent(menuTitle, item) {
    menuTitle.addClass("curr-item");
    if ($(".content").is(":visible")) {
        $(".content").slideUp(function(){
            item.slideDown();
        });
    }
    else {
        item.slideDown();
    }
    document.title = menuTitle.text() + " | Erick Santos";
    $('html, body').animate({
        scrollTop: (item.offset().top - $("body").offset().top + $("body").scrollTop())
    },700);
    $("#header").css("height","100px");
    $("hr").css("margin", "30px auto");
}