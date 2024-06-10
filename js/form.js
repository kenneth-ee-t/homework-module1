

document.addEventListener("DOMContentLoaded", function() {
    var optionsSelect = document.getElementById("optionsSelect");
    var inputContainer = document.getElementById("inputContainer");

    optionsSelect.addEventListener("change", function() {
        var selectedOption = optionsSelect.value;
        inputContainer.innerHTML = ""; // Clear previous input boxes

        if (selectedOption === "email") {
            createInputBox("Enter your email");
        } else if (selectedOption === "phone") {
            createInputBox("Enter your phone number");
        }

    });

    optionsSelect.addEventListener("change", function() {
        // Get the selected option
        var selectedOption = optionsSelect.value;
        
        // Check if the selected option is not the default option
        if (selectedOption !== "selected") {
            // Apply blue border to optionsSelect
            optionsSelect.style.borderColor = "blue";
            optionsSelect.style.borderWidth = "4px";
            optionsSelect.style.borderRadius = "2px";
        } else {
            // If the default option is selected, remove border style
            optionsSelect.style.borderColor = "";
            optionsSelect.style.borderWidth = "";
        }
    });

    function createInputBox(labelText) {
        disableEventListener = true;
        var inputLabel = document.createElement("label");
        inputLabel.textContent = labelText;
        inputLabel.style.display = "block";
        inputLabel.style.fontWeight = "normal";


        var inputBox = document.createElement("input");
        inputBox.setAttribute("type", "text");
        inputBox.style.width = "50%"; // Set width to 300px


        inputContainer.appendChild(document.createElement("br"));
        inputContainer.appendChild(inputLabel);
        inputContainer.appendChild(inputBox);

        inputContainer.style.display = "block"; // Show the input container
        
    }
});
