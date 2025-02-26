// Récupérer les éléments du formulaire
const form = document.querySelector("form");
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const phoneInput = document.querySelector('input[name="phone"]');
const messageInput = document.querySelector('textarea[name="message"]');

// Fonction pour valider le champ "Nom"
function validateName() {
  const nameValue = nameInput.value.trim();
  const nameError = nameInput.parentElement.querySelector("span");

  if (nameValue === "") {
    nameError.textContent = "Le nom est obligatoire";
    return false;
  } else if (nameValue.length < 3) {
    nameError.textContent = "Le nom doit contenir au moins 3 caractères";
    return false;
  } else {
    nameError.textContent = "";
    return true;
  }
}

// Fonction pour valider le champ "Email"
function validateEmail() {
  const emailValue = emailInput.value.trim();
  const emailError = emailInput.parentElement.querySelector("span");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailValue === "") {
    emailError.textContent = "L'email est obligatoire";
    return false;
  } else if (!emailRegex.test(emailValue)) {
    emailError.textContent = "Veuillez entrer un email valide";
    return false;
  } else {
    emailError.textContent = "";
    return true;
  }
}

// Fonction pour valider le champ "Telephone"
function validatePhone() {
  const phoneValue = phoneInput.value.trim();
  const phoneError = phoneInput.parentElement.querySelector("span");
  const phoneRegex = /^[0-9]{10}$/;

  if (phoneValue === "") {
    phoneError.textContent = "Le téléphone est obligatoire";
    return false;
  } else if (!phoneRegex.test(phoneValue)) {
    phoneError.textContent =
      "Veuillez entrer un numéro de téléphone valide (10 chiffres)";
    return false;
  } else {
    phoneError.textContent = "";
    return true;
  }
}

// Fonction pour valider le champ "Message"
function validateMessage() {
  const messageValue = messageInput.value.trim();
  const messageError = messageInput.parentElement.querySelector("span");

  if (messageValue === "") {
    messageError.textContent = "Le message est obligatoire";
    return false;
  } else if (messageValue.length < 10) {
    messageError.textContent =
      "Le message doit contenir au moins 10 caractères";
    return false;
  } else {
    messageError.textContent = "";
    return true;
  }
}

// Fonction pour afficher un message de confirmation
function showConfirmation() {
  const confirmationMessage = document.createElement("div");
  confirmationMessage.classList.add("confirmation-message");
  confirmationMessage.textContent = "Formulaire envoyé avec succès !";
  form.appendChild(confirmationMessage);

  // Masquer le message après 3 secondes
  setTimeout(() => {
    confirmationMessage.remove();
  }, 3000);
}

// Ajouter un écouteur d'événements sur la soumission du formulaire
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Empêcher l'envoi du formulaire

  // Valider tous les champs
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPhoneValid = validatePhone();
  const isMessageValid = validateMessage();

  // Si tous les champs sont valides, afficher le message de confirmation
  if (isNameValid && isEmailValid && isPhoneValid && isMessageValid) {
    showConfirmation();
    form.reset(); // Réinitialiser le formulaire
  }
});

// Ajouter des écouteurs d'événements pour valider les champs en temps réel
nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
phoneInput.addEventListener("input", validatePhone);
messageInput.addEventListener("input", validateMessage);
