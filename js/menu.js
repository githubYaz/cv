
//Fonctions

function positionnerEcran(numEcran){
    ecranAffiche[numEcran].scrollIntoView({
        block: 'end',
        inline:'start',
        behavior: 'smooth'
    });
}

function changerCurseur(numLien){
    lienMenu[numLien].style.cursor = 'pointer';
}




/*tableaui qui contient les liens de la barre NAV */
lienMenu = document.querySelectorAll('nav ul li');

/*tableau qui contient les .ecran de la page*/
ecranAffiche = document.querySelectorAll('.ecran');

for (let i=0; i<lienMenu.length; i++){
    lienMenu[i].addEventListener('click',function(){positionnerEcran(i);});
    lienMenu[i].addEventListener('mouseover',function(){changerCurseur(i);});
}