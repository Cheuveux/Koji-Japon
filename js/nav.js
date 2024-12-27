//FICHIER JAVASCRIPT POUR GESTION DU HEADER ET DU NAV


//ICI C POUR INCLURE LE MEME HEADER A TOUTES LES DIFFERENTES PAGES DU SITE
    fetch('header.html')
    .then(response => response.text())
    .then(html => {
    document.getElementById('header').innerHTML = html;
    });

//ICI POUR AJOUTER UNE CLASSE ACTIVE A LA PAGE ACTIVE ET LUI ATTRIBUER DES PROPRIETES CSS (CHANGEMENT DE COULEUR + GRAS)
window.onload = function() {
    // Récupère l'URL actuelle
    const currentPage = window.location.pathname.split("/").pop();

    // Associe chaque page à l'élément du nav
    const navLinks = {
        "index.html": "nav-accueil",
        "actu.html": "nav-actualites",
        "historique.html": "nav-historique",
        "liens.html": "nav-liens",
        "contact.html": "nav-contact"
    };

    // Applique la classe active au lien correspondant
    if (navLinks[currentPage]) {
        const navItem = document.getElementById(navLinks[currentPage]);
        if (navItem) {
            navItem.classList.add('active');
        }
    }
};

 

