/* ----- RANDOM CODES ----- */
//fUNCTION TO GENERATE COMBINATION OF CHARACTERS
 //Create variables to store generated codes and the type of characters we want to show as codes

var getCode = ' '; //to store entered code
var btnvalue;  //for button boolean value
//create variable to hold the type of characters we want to show as codes
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';

function generateCode() {
    var code = ' '; //initialize to null value
    //Generate character multiple times using a loop
    for (i = 1; i <=8; i++) {
        var char = Math.floor(Math.random()*str.length); //random select a character from the variable a d then store in a new variable
        code += str.charAt(char); //accoumulate the generated character into a string of 8 characters
    }
    return code; //return the final accumulated strong when loop ends
}
//Get HTML element to display
document.getElementById("codes").innerHTML = generateCode();

//Disable Button
function disableButton(btnvalue) {
    document.getElementById("submit").disabled = btnvalue; //able/disable button
    if (btnvalue == true) { //test if button is disabled or enabled
        //set button and label color translucent
        document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 0.3)";
        document.getElementById("submit").style.color = "rgba(255, 255, 255, 0.5)";
    } else {
        //set button and label color with no translucent
        document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 1)";
        document.getElementById("submit").style.color = "rgba(255, 255, 255, 1)";
    }
}

//listen to user input code
var codebox = document.getElementById("codeentered"); //get textbox
codebox.addEventListener("input", evaluateCode); //listen to code entered in textbox

//run function if detected user had entered a character in textbox
function evaluateCode() {
    getCode = document.getElementById("codeentered").value; //get character entered
    var charset1 = getCode.trim(); //remove any hidden characters entered
    var charset2 = document.getElementById("codes").innerHTML.trim(); //remove any hidden characters generated
    //test if code entered matches the number of generated characters
    if (charset1.length == charset2.length && charset1 == charset2) {
        disableButton(false);
    }
}
disableButton(true);