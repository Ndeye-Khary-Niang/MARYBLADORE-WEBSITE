const form = document.getElementById("contactform");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const messageError = document.getElementById("message"); // Assuming you add an ID for message error
const allInputs = document.querySelectorAll(".input-container");

function validateForm() {
  let isValid = true;

  if (nameInput.value.trim() === "") {
    nameError.textContent = "Le nom est requis.";
    nameInput.classList.add("error");
    isValid = false;
  } else {
    nameError.textContent = "";
    nameInput.classList.remove("error");
  }

  if (emailInput.value.trim() === "") {
    emailError.textContent = "L'email est requis.";
    emailInput.classList.add("error");
    isValid = false;
  } else if (!isValidEmail(emailInput.value)) {
    emailError.textContent = "L'email n'est pas valide.";
    emailInput.classList.add("error");
    isValid = false;
  } else {
    emailError.textContent = "";
    emailInput.classList.remove("error");
  }

  if (phoneInput.value.trim() === "") {
    phoneError.textContent = "Le numéro de téléphone est requis.";
    phoneInput.classList.add("error");
    isValid = false;
  } else if (!isValidPhone(phoneInput.value)) {
    // Add phone validation
    phoneError.textContent = "Le numéro de téléphone n'est pas valide.";
    phoneInput.classList.add("error");
    isValid = false;
  } else {
    phoneError.textContent = "";
    phoneInput.classList.remove("error");
  }

  // Validate message (if needed - you might not require it)
  // if (messageInput.value.trim() === "") {
  //   messageError.textContent = "Le message est requis.";
  //   isValid = false;
  // } else {
  //   messageError.textContent = "";
  // }

  return isValid;
}

function isValidEmail(email) {
  // Basic email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhone(phone) {
  // Basic phone validation regex (you can customize this)
  const phoneRegex = /^\d{10}$/; // Example: 10 digits
  return phoneRegex.test(phone);
}

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  if (validateForm()) {
    // Form is valid, display confirmation and potentially submit data
    alert("Message envoyé !"); // Or a nicer modal/message
    form.reset(); // Clear the form
    allInputs.forEach((input) => {
      input.classList.remove("focus");
    });
  } else {
    // Form is invalid, errors are displayed
  }
});

// Add focus/blur listeners for styling (optional, but improves UX)
allInputs.forEach((input) => {
  const inputElement = input.querySelector(".input");
  inputElement.addEventListener("focus", () => {
    input.classList.add("focus");
  });
  inputElement.addEventListener("blur", () => {
    if (inputElement.value.trim() === "") {
      input.classList.remove("focus");
    }
  });
});
