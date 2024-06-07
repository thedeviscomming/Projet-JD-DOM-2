// script.js

// Attendre que le contenu DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner les éléments color-box et change-color-btn
    var colorBox = document.getElementById('color-box');
    var changeColorBtn = document.getElementById('change-color-btn');

    // Fonction pour générer une couleur aléatoire
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Ajouter un écouteur d'événement au bouton change-color-btn
    changeColorBtn.addEventListener('click', function() {
        // Changer la couleur d'arrière-plan de la boîte de couleur
        colorBox.style.backgroundColor = getRandomColor();
    });
});
