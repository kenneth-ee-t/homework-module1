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

//user interaction with table cells
$(document).ready(function(){
    $("td").click(function(){ //user select a table data cell
        var content = $(this).text(); //get content of cell
        var columnIndex =$(this).index(); //this is get column index of clicked cell
        var rowIndex = $(this).parent().index(); //get row index of clicked cells's aprent row

        if (content != "Not Available") { //check if content does not contain a particular string
            $(this).toggleClass("tdhighlight"); //add or remove class when cell is selected

            if ($(this).hasClass ("tdhighlight")){//check if selected cell has class
                $('#displaySelected').css("visibility", "visible"); //make display box visbile
                $('#displaySelected').css("margin-top", "2em"); //add spaces above display box
                $('#result').append("<p>"+content+" at "+$('thead tr th').eq(columnIndex).text()+"</p>"); //add child element with contents of cell
            } else {
                //if selected cell don't have class
                $('#result p:contains('+content+')').remove(); //remove child element

                if ($('#result').has('p').length == false) { //check if there are any child elements within parent
                    $('#displaySelected').css("visibility", "hidden"); //make display box hidden
                    $('#displaySelected').css("margin-top", "0"); //remove spaces above display box

                }
            }
        }
    });
});