// Cache frequently accessed elements
const usernameField = document.getElementById("username");
const passwordField = document.getElementById("password");
const errorMessageElement = document.getElementById("error-message");

// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault();

    const username = usernameField.value;
    const password = passwordField.value;

    // Perform form validation
    const isFormValid = validateForm(username, password);

    if (isFormValid) {
        // Simulate authentication
        if (username === "example@example.com" && password === "password") {
            window.location.href = "index.php"; // Redirect to the dashboard
        } else {
            displayErrorMessage("Invalid username or password. Please try again.");
        }
    }
}

// Function to validate form fields
function validateForm(username, password) {
    const usernameRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!username.match(usernameRegex)) {
        displayErrorMessage("Invalid username or email format");
        return false;
    }

    if (password.length < 6) {
        displayErrorMessage("Password must be at least 6 characters long");
        return false;
    }

    clearErrorMessages();
    return true;
}

// Function to display error message
function displayErrorMessage(message) {
    errorMessageElement.innerText = message;
}

// Function to clear error messages
function clearErrorMessages() {
    errorMessageElement.innerText = "";
}

// Event listener for form submission
document.getElementById("login-form").addEventListener("submit", handleFormSubmission);
document.getElementById("toggle-password").addEventListener("click", togglePasswordVisibility);