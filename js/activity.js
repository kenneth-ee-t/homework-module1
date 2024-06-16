$(document).ready(function(){
    // Click event handler for td elements
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

    // Hover event handler for td elements
    $("td").hover(
        function(){
            // Mouse enter: Set pointer cursor if td is clickable
            if (!$(this).is(":first-child") && !$(this).html().includes("Not Available")) {
                $(this).css("cursor", "pointer");
            }
        },
        function(){
            // Mouse leave: Restore default cursor
            $(this).css("cursor", "auto");
        }
    );
});
