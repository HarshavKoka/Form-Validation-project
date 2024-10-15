const form = document.querySelector("form"),
    emailField = form.querySelector(".email-field"),
    emailInput = emailField.querySelector(".email"),
    passField = form.querySelector(".create-password"),
    passInput = passField.querySelector(".password"),
    confirmPassField = form.querySelector(".confirm-password"),
    confirmPassInput = confirmPassField.querySelector(".password");

// Validate email function
function checkEmail() {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailInput.value.match(emailPattern)) {
        return emailField.classList.add("invalid");
    }
    emailField.classList.remove("invalid");
}

// Add click listeners to eye icons
const eyeIcons = document.querySelectorAll(".bx.bx-hide");
eyeIcons.forEach((eyeIcon) => {
    eyeIcon.addEventListener("click", () => {
        const pInput = eyeIcon.parentElement.querySelector("input");
        if (pInput.type === "password") {
            eyeIcon.classList.replace("bx-hide", "bx-show");
            pInput.type = "text";
        } else {
            eyeIcon.classList.replace("bx-show", "bx-hide");
            pInput.type = "password";
        }
    });
});

// Validate password function
function createPass() {
    const passPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passInput.value.match(passPattern)) {
        return passField.classList.add("invalid");
    }
    passField.classList.remove("invalid");
}

// Confirm password function
function confirmPass() {
    if (passInput.value !== confirmPassInput.value || confirmPassInput.value === "") {
        return confirmPassField.classList.add("invalid");
    }
    confirmPassField.classList.remove("invalid");
}

// Add event listeners
emailInput.addEventListener("keyup", checkEmail);
passInput.addEventListener("keyup", createPass);
confirmPassInput.addEventListener("keyup", confirmPass);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkEmail();
    createPass();
    confirmPass();
    if (
        !emailField.classList.contains("invalid") &&
        !passField.classList.contains("invalid") &&
        !passField.classList.contains("invalid")
    ) {
        location.href = form.getAttribute("action");
    }
});

