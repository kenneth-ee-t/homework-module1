/* ----- RANDOM CODES ----- */
//fUNCTION TO GENERATE COMBINATION OF CHARACTERS
function generateCode() {
    //Create variables to store generated codes and the type of characters we want to show as codes
    var code = ''; //initialize to null value
    var str = 'ABCDEFGHIJKLMNOPQRSTUVSXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';

    //Generate character multiple times using a loop
    for (i = 1; i <=8; i++) {
        var char = Math.random()*str.length; //random select a character from the variable a d then store in a new variable
        code += str.charAt(char) //accoumulate the generated character into a string of 8 characters
    }
    return code; //return the final accumulated strong when loop ends
}

//Get HTML element to display
document.getElementById("codes").innerHTML = generateCode();

//Disable Button
function disableButton() {
    document.getElementById("submit").disabled = true;
}

disableButton();