var href = "";
$(document).ready(function() {
    $("a").on("click",function(e){
        href = $(this).attr('href');
        if (href.includes("mailto")) return;
        e.preventDefault();
        $("body").animate({opacity:"0", "margin-top": "-2%" }, 200, function() {
            document.location = href;
            $("body").css("opacity", "1");
            $("body").css("margin-top", "0px");
        });
        return false;
    })
});
