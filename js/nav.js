//FICHIER JAVASCRIPT POUR GESTION DU HEADER ET DU NAV


//ICI C POUR INCLURE LE MEME HEADER A TOUTES LES DIFFERENTES PAGES DU SITE
    fetch('header.html')
    .then(response => response.text())
    .then(html => {
    document.getElementById('header').innerHTML = html;
    });

//ICI POUR AJOUTER UNE CLASSE ACTIVE A LA PAGE ACTIVE ET LUI ATTRIBUER DES PROPRIETES CSS (CHANGEMENT DE COULEUR + GRAS)
let navLinks = document.querySelectorAll('.navLink');

navLinks.forEach(navLink => {
    navLinks.addEventListener('click', () => {
        navLinks.forEach(link => link.classList.remove('active'));
        navLink.classList.add('active');
    });
});