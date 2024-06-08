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

    function createInputBox(labelText) {
        var inputLabel = document.createElement("label");
        inputLabel.textContent = labelText;

        var inputBox = document.createElement("input");
        inputBox.setAttribute("type", "text");

        inputContainer.appendChild(inputLabel);
        inputContainer.appendChild(inputBox);

        inputContainer.style.display = "block"; // Show the input container
    }
});
