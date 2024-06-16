$(document).ready(function(){
        $("td").click(function(){
            // Check if it's not the first child and innerHTML does not contain "Not Available"
            if (!$(this).is(":first-child") && !$(this).html().includes("Not Available")) {
                // Check if the cell already has the specified CSS styles
                if ($(this).css("background-color") === "rgb(180, 196, 36)" && $(this).css("color") === "rgb(255, 255, 255)") {
                    // If yes, remove the styles (reset to normal state)
                    $(this).css({"background-color": "", "color": ""});
                } else {
                    // Otherwise, apply the styles
                    $(this).css({"background-color":"rgb(180, 196, 36)", "color":"white"});
                }
            }
        });
    });
    