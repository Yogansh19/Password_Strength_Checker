function checkPassword() {
    let password = document.getElementById("password").value;
    let meterBar = document.getElementById("meter-bar");
    let strengthMessage = document.getElementById("strength-message");
    let checkButton = document.querySelector(".check-btn"); // Selecting the button

    let lengthCriteria = document.getElementById("length");
    let upperCaseCriteria = document.getElementById("uppercase");
    let lowerCaseCriteria = document.getElementById("lowercase");
    let numberCriteria = document.getElementById("number");
    let specialCriteria = document.getElementById("special");

    // Strength variables
    let strength = 0;
    
    // Reset classes
    lengthCriteria.classList.remove("valid");
    lengthCriteria.classList.add("invalid");

    upperCaseCriteria.classList.remove("valid");
    upperCaseCriteria.classList.add("invalid");

    lowerCaseCriteria.classList.remove("valid");
    lowerCaseCriteria.classList.add("invalid");

    numberCriteria.classList.remove("valid");
    numberCriteria.classList.add("invalid");

    specialCriteria.classList.remove("valid");
    specialCriteria.classList.add("invalid");

    // Check password length
    if (password.length >= 8) {
        strength += 20;
        lengthCriteria.classList.add("valid");
        lengthCriteria.classList.remove("invalid");
    }

    // Check for lowercase letters
    if (/[a-z]/.test(password)) {
        strength += 20;
        lowerCaseCriteria.classList.add("valid");
        lowerCaseCriteria.classList.remove("invalid");
    }

    // Check for uppercase letters
    if (/[A-Z]/.test(password)) {
        strength += 20;
        upperCaseCriteria.classList.add("valid");
        upperCaseCriteria.classList.remove("invalid");
    }

    // Check for numbers
    if (/[0-9]/.test(password)) {
        strength += 20;
        numberCriteria.classList.add("valid");
        numberCriteria.classList.remove("invalid");
    }

    // Check for special characters
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password)) {
        strength += 20;
        specialCriteria.classList.add("valid");
        specialCriteria.classList.remove("invalid");
    }

    // Update meter bar and strength message
    meterBar.style.width = strength + "%";

    // Change button and meter color based on strength
    if (strength < 40) {
        meterBar.style.backgroundColor = "red";
        strengthMessage.innerHTML = "Weak";
        checkButton.style.backgroundColor = "red";  // Change button color to red
    } else if (strength >= 40 && strength < 80) {
        meterBar.style.backgroundColor = "orange";
        strengthMessage.innerHTML = "Moderate";
        checkButton.style.backgroundColor = "orange";  // Change button color to orange
    } else if (strength >= 80) {
        meterBar.style.backgroundColor = "green";
        strengthMessage.innerHTML = "Strong";
        checkButton.style.backgroundColor = "green";  // Change button color to green
    }
}
