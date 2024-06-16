$(document).ready(function(){
    $("td").click(function(){
        // Check if it's not the first child and innerHTML does not contain "Not Available"
        if (!$(this).is(":first-child") && !$(this).html().includes("Not Available")) {
            $(this).css({"background-color":"rgb(180, 196, 36)", "color":"white"});
        }
    });

});
