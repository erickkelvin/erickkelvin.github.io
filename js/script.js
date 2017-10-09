$(document).ready(function() {
    let currPage = window.location.href.split("#");
    if (currPage.length > 1) {
        let currID = "#" + currPage[1];
        $(currID).slideDown();
        $("#header").css("height","100px");
        $('html, body').animate({
            scrollTop: ($(currID).offset().top)
        },700);
        $("a[href='" + currID + "']").addClass("curr-item");
        
    }

    $(".menu-item").click(function() {
        let item = $($(this).attr("href"));
        if (item.is(":visible")) {
            $(this).removeClass("curr-item");
            item.slideUp();
            $("html, body").animate({ scrollTop: "0" });
            $("#header").css("height","150px");
        }
        else {
            $(".menu-item").removeClass("curr-item");
            $(this).addClass("curr-item");
            if ($(".content").is(":visible")) {
                $(".content").slideUp(function(){
                    item.slideDown();
                });
            }
            else {
                item.slideDown();
            }
            $('html, body').animate({
                scrollTop: (item.offset().top - $("body").offset().top + $("body").scrollTop())
            },700);
            $("#header").css("height","100px");
        }
    });

});