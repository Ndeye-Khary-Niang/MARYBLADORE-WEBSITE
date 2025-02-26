document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactform");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche l'envoi par défaut

    // Récupération des champs
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    // Vérification des champs
    if (name === "" || email === "" || phone === "" || message === "") {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    // Vérification du format de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Veuillez entrer une adresse email valide.");
      return;
    }

    // Vérification du format du téléphone (exemple pour les numéros à 9 chiffres)
    const phoneRegex = /^\d{9}$/;
    if (!phoneRegex.test(phone)) {
      alert("Veuillez entrer un numéro de téléphone valide à 9 chiffres.");
      return;
    }

    // Affichage d'un message de confirmation
    alert("Votre message a été envoyé avec succès !");
    form.reset(); // Réinitialisation du formulaire
  });
});

// ======================
// page des produits============
document.addEventListener("DOMContentLoaded", function () {
  const quantityInput = document.querySelector(".quantite input");
  const priceElement = document.querySelector(".price");
  const originalPrice = 2000;
  const oldPrice = 2500;
  const addToCartBtn = document.querySelector(".add-card-btn");

  // Met à jour le prix total en fonction de la quantité
  quantityInput.addEventListener("input", function () {
    let quantity = parseInt(quantityInput.value);
    if (isNaN(quantity) || quantity < 1) {
      quantity = 1;
      quantityInput.value = 1;
    }
    const newPrice = originalPrice * quantity;
    const newOldPrice = oldPrice * quantity;
    priceElement.innerHTML = `${newPrice} <del>${newOldPrice}</del>`;
  });

  // Ajoute un effet de confirmation lors de l'ajout au panier
  addToCartBtn.addEventListener("click", function (event) {
    event.preventDefault();
    alert("Produit ajouté au panier avec succès !");
  });
});
