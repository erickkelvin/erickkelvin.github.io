var href = "";
$(document).ready(function() {
    $("a").on("click",function(e){
        e.preventDefault();
        href = $(this).attr('href');
        $("body").animate({opacity:"0", "margin-top": "-2%" }, 200, function() {
            document.location = href;
            $("body").css("opacity", "1");
            $("body").css("margin-top", "0px");
        });
        return false;
    })
});
