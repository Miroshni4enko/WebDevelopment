$(document).ready(function(){
    var list_date = $(".items > p:first-child");
    for (var i =0; i< list_date.length;i++){
        date = list_date[i]
        $(date).text($(date).text().substr(0,$(date).text().length-3));
    }
    $(".items-header").click(function(){
        if ($(".items").is(':visible')) {
            $(".items").slideUp();
        }
        if ($(this).next().is(':hidden')) {
            $(this).next().slideDown();
        } else {
            $(this).next().slideUp();
        }
    });

});