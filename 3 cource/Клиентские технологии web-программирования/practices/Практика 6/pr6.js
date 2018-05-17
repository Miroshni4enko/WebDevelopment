$(document).ready(function () {
    // change text color and background color for all children of articles
    // set font weight bold for children of class 'category'
    $('.firstTask').click(function () {
        $('article').children().css({'color': 'red', 'background': '#4CAF50'});
        $('article').children('.category').css({'font-weight': 'bold'});
    });

    //added class task6 for siblings of #post-13
    $('.secondTask').click(function () {
        $('#post-13').siblings().addClass('task6');
    });

    // delete element from post-7 to post-25
    $('.thirdTask').click(function () {
        $('#post-7').nextUntil('#post-25').detach();
    });

    // slide down parents of class "entry-summary"
    $('.fourthTask').click(function () {
        $('.entry-summary').parent().slideUp();
    });

});
