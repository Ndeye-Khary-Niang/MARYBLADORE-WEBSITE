// compte
//! Récupérer les éléments du formulaire et des messages d'erreur
const form = document.getElementById("registrationForm");

const lastNameInput = document.getElementById("lastName");
const firstNameInput = document.getElementById("firstName");
const phoneInput = document.getElementById("phone");

const lastNameError = document.getElementById("lastNameError");
const firstNameError = document.getElementById("firstNameError");
const phoneError = document.getElementById("phoneError");

const confirmationMessage = document.getElementById("confirmationMessage");

//! Fonction pour valider le champ "Nom"
function validateLastName() {
  const lastName = lastNameInput.value;
  if (lastName === "" || lastName.length < 3) {
    lastNameError.textContent =
      "Le nom est obligatoire et doit contenir au moins 3 caractères.";
    lastNameInput.style.border = "2px solid red";
    return false; // Validation échouée
  }
  lastNameInput.style.border = "2px solid green";
  lastNameError.textContent = ""; // Réinitialiser le message d'erreur si valide
  return true; // Validation réussie
}

//! Fonction pour valider le champ "Prénom"
function validateFirstName() {
  const firstName = firstNameInput.value;
  if (firstName === "" || firstName.length < 3) {
    firstNameError.textContent = "Le prénom est obligatoire.";
    firstNameInput.style.border = "2px solid red";
    return false; // Validation échouée
  }
  firstNameInput.style.border = "2px solid green";
  firstNameError.textContent = ""; // Réinitialiser le message d'erreur si valide
  return true; // Validation réussie
}

//! Fonction pour valider le champ "Téléphone"
function validatePhone() {
  const phoneValue = phoneInput.value;
  if (phoneValue === "" || phoneValue.length < 8) {
    phoneError.textContent = "Le numéro de téléphone est obligatoire.";
    phoneInput.style.border = "2px solid red";
    return false; // Validation échouée
  }
  phoneInput.style.border = "2px solid green";
  phoneError.textContent = ""; // Réinitialiser le message d'erreur si valide
  return true; // Validation réussie
}

//! Fonction pour afficher un message de confirmation
function displayConfirmation(isValid) {
  if (isValid) {
    // Afficher le message de confirmation, si tous les champs sont valident
    confirmationMessage.textContent = "Inscription réussie !";
    confirmationMessage.style.color = "green";
  } else {
    // Afficher un message d'erreur, si un ou plusieurs champs sont invalides
    confirmationMessage.textContent =
      "Veuillez corriger les erreurs ci-dessus.";
    confirmationMessage.style.color = "red";
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

  // Vérifier si tous les champs sont valides
  const isFormValid = isLastNameValid && isFirstNameValid && isPhoneValid;

  // Afficher le message de confirmation en fonction de la validation
  displayConfirmation(isFormValid);
});
