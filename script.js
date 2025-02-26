//  pour la validation du formulaire d'inscription===================
//! Récupérer les éléments du formulaire et des messages d'erreur
const form = document.getElementById("registrationForm");

const lastNameInput = document.getElementById("lastName");
const firstNameInput = document.getElementById("firstName");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");

const lastNameError = document.getElementById("lastNameError");
const firstNameError = document.getElementById("firstNameError");
const phoneError = document.getElementById("phoneError");
const emailError = document.getElementById("emailError");

const confirmationMessage = document.getElementById("confirmationMessage");

//! Fonction pour valider le champ "Nom"
function validateLastName() {
  const lastName = lastNameInput.value;
  if (lastName === "" || lastName.length < 3) {
    lastNameError.textContent =
      "Le nom est obligatoire et doit contenir au moins 3 caractères.";
    return false; // Validation échouée
  }
  lastNameInput.style.border = "2px solid #9F2E2B";
  lastNameError.textContent = ""; // Réinitialiser le message d'erreur si valide
  return true; // Validation réussie
}

//! Fonction pour valider le champ "Prénom"
function validateFirstName() {
  const firstName = firstNameInput.value;
  if (firstName === "" || firstName.length < 3) {
    firstNameError.textContent = "Le prénom est obligatoire.";
    return false; // Validation échouée
  }
  firstNameInput.style.border = "2px solid #9F2E2B";
  firstNameError.textContent = ""; // Réinitialiser le message d'erreur si valide
  return true; // Validation réussie
}

//! Fonction pour valider le champ "Email"
function validateemail() {
  const email = emailInput.value;
  if (email === "" || email.length < 3) {
    emailError.textContent = "Le mail est obligatoire.";
    return false; // Validation échouée
  }
  emailInput.style.border = "2px solid #9F2E2B";
  emailError.textContent = ""; // Réinitialiser le message d'erreur si valide
  return true; // Validation réussie
}

//! Fonction pour valider le champ "Téléphone"
function validatePhone() {
  const phoneValue = phoneInput.value;
  if (phoneValue === "" || phoneValue.length < 8) {
    phoneError.textContent = "Le numéro de téléphone est obligatoire.";

    return false; // Validation échouée
  }
  phoneInput.style.border = "2px solid #9F2E2B";
  phoneError.textContent = ""; // Réinitialiser le message d'erreur si valide
  return true; // Validation réussie
}

//! Fonction pour afficher un message de confirmation
function displayConfirmation(isValid) {
  if (isValid) {
    // Afficher le message de confirmation, si tous les champs sont valides
    confirmationMessage.textContent = "Inscription réussie !";
    confirmationMessage.style.color = "#9F2E2B";
  } else {
    // Afficher un message d'erreur, si un ou plusieurs champs sont invalides
    confirmationMessage.textContent =
      "Veuillez corriger les erreurs ci-dessus.";
    confirmationMessage.style.color = "#9F2E2B";
  }
}

//! Ajouter un écouteur d'événements sur la soumission du formulaire
form.addEventListener("submit", function (event) {
  // Empêcher l'envoi du formulaire
  event.preventDefault();

  // Valider chaque champ
  const isLastNameValid = validateLastName();
  const isFirstNameValid = validateFirstName();
  const isPhoneValid = validatePhone();
  const emailvalid = validateemail();

  // Vérifier si tous les champs sont valides
  const isFormValid =
    isLastNameValid && isFirstNameValid && isPhoneValid && emailvalid;

  // Afficher le message de confirmation en fonction de la validation
  displayConfirmation(isFormValid);
});
