document.querySelectorAll('.btn-add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId;
        alert(`Produit ${productId} ajouté au panier !`);
        // Ajouter une gestion de stockage (localStorage ou autre) ici.
    });
});